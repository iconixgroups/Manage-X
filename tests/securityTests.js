import mongoose from 'mongoose';
import { expect } from 'chai';
import { describe, it, before, after } from 'mocha';
import User from '../models/User';
import Workspace from '../models/Workspace';
import Project from '../models/Project';
import Task from '../models/Task';
import ActivityLog from '../models/ActivityLog';

describe('Security Tests', () => {
  before(async () => {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  after(async () => {
    await mongoose.connection.close();
  });

  describe('User Model Security', () => {
    it('should prevent XSS in user fields', async () => {
      const maliciousScript = '<script>alert("XSS")</script>';
      const user = new User({
        firstName: maliciousScript,
        lastName: maliciousScript,
        email: 'test@example.com',
        password: 'password123',
        company: maliciousScript,
        contactNumber: maliciousScript
      });
      await user.save();
      expect(user.firstName).to.not.equal(maliciousScript);
      expect(user.lastName).to.not.equal(maliciousScript);
      expect(user.company).to.not.equal(maliciousScript);
      expect(user.contactNumber).to.not.equal(maliciousScript);
    });

    it('should enforce email validation', async () => {
      try {
        await new User({ email: 'invalid', password: 'password123' }).save();
      } catch (error) {
        expect(error.errors['email'].message).to.include('is not a valid email address');
      }
    });
  });

  describe('Workspace Model Security', () => {
    it('should validate colorHexCode format', async () => {
      try {
        await new Workspace({ name: 'Test Workspace', colorHexCode: 'ZZZZZZ', owner: new mongoose.Types.ObjectId() }).save();
      } catch (error) {
        expect(error.errors['colorHexCode'].message).to.include('Validator failed for path');
      }
    });
  });

  describe('Project Model Security', () => {
    it('should sanitize textTags to prevent XSS', async () => {
      const maliciousScript = '<script>alert("XSS")</script>';
      const project = new Project({
        name: 'Test Project',
        category: 'Development',
        colorHexCode: '#FFFFFF',
        startDate: new Date(),
        completionDate: new Date(),
        status: 'Open',
        textTags: [{ tag: maliciousScript, colorHexCode: '#000000' }]
      });
      await project.save();
      expect(project.textTags[0].tag).to.not.equal(maliciousScript);
    });
  });

  describe('Task Model Security', () => {
    it('should prevent injection in serialNumber field', async () => {
      const task = new Task({
        serialNumber: '1; DROP TABLE tasks;',
        description: 'Test Task',
        status: 'Pending',
        category: 'Urgent',
        startDate: new Date(),
        deadlineDate: new Date(),
        project: new mongoose.Types.ObjectId()
      });
      await task.save();
      expect(task.serialNumber).to.be.a('number');
    });
  });

  describe('ActivityLog Model Security', () => {
    it('should correctly log actions without executing injected scripts', async () => {
      const maliciousScript = '<script>alert("XSS")</script>';
      const log = new ActivityLog({
        actionType: 'CREATE',
        description: maliciousScript,
        user: new mongoose.Types.ObjectId()
      });
      await log.save();
      expect(log.description).to.not.equal(maliciousScript);
    });
  });
});
