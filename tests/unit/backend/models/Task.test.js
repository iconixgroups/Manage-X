import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Task from '../../../models/Task';

describe('Task Model', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  describe('Field Validations', () => {
    it('should create a task with all fields', async () => {
      const taskData = {
        description: 'Test Task',
        status: 'Pending',
        category: 'Development',
        tags: [{ text: 'Urgent', colorHexCode: '#FF0000' }],
        startDate: new Date(),
        deadlineDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        assignedTo: [new mongoose.Types.ObjectId()],
        files: [{ fileName: 'spec.pdf', filePath: '/files/spec.pdf', fileSize: 1024 }],
        project: new mongoose.Types.ObjectId()
      };

      const task = new Task(taskData);
      const savedTask = await task.save();

      expect(savedTask.serialNumber).toBeDefined();
      expect(savedTask.description).toBe(taskData.description);
      expect(savedTask.status).toBe(taskData.status);
      expect(savedTask.category).toBe(taskData.category);
      expect(savedTask.tags).toEqual(expect.arrayContaining(taskData.tags));
      expect(savedTask.startDate).toEqual(taskData.startDate);
      expect(savedTask.deadlineDate).toEqual(taskData.deadlineDate);
      expect(savedTask.assignedTo).toEqual(expect.arrayContaining(taskData.assignedTo));
      expect(savedTask.files).toEqual(expect.arrayContaining(taskData.files));
      expect(savedTask.project).toEqual(taskData.project);
    });

    it('should auto-increment serialNumber on save', async () => {
      const taskData = { description: 'Another Task', category: 'Testing', startDate: new Date(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 7)), project: new mongoose.Types.ObjectId() };
      const task1 = new Task(taskData);
      const task2 = new Task(taskData);

      const savedTask1 = await task1.save();
      const savedTask2 = await task2.save();

      expect(savedTask2.serialNumber).toBe(savedTask1.serialNumber + 1);
    });

    it('should fail validation if startDate is in the future', async () => {
      const taskData = { description: 'Future Task', category: 'Planning', startDate: new Date(new Date().setDate(new Date().getDate() + 1)), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 7)), project: new mongoose.Types.ObjectId() };
      const task = new Task(taskData);

      await expect(task.save()).rejects.toThrow(mongoose.Error.ValidationError);
    });

    it('should fail validation if deadlineDate is before startDate', async () => {
      const taskData = { description: 'Invalid Task', category: 'Planning', startDate: new Date(), deadlineDate: new Date(new Date().setDate(new Date().getDate() - 1)), project: new mongoose.Types.ObjectId() };
      const task = new Task(taskData);

      await expect(task.save()).rejects.toThrow(mongoose.Error.ValidationError);
    });

    // Additional tests for other validations and edge cases can be added here
  });

  // Tests for pre-remove hook logic would go here
});
