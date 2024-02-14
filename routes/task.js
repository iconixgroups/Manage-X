const express = require('express');
const router = express.Router();
const { addTask, updateTask, deleteTask, inviteMember, updateMemberRole, logActivity } = require('../controllers/taskController');
const { validateEmail, formatDate, incrementTaskNumber, updateProjectCount } = require('../utils/helpers');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// Add a new task to a project
router.post('/projects/:projectId/tasks', isAuthenticated, (req, res) => {
  const { projectId } = req.params;
  const taskData = req.body;
  addTask(projectId, taskData, (err, task) => {
    if (err) {
      res.status(500).json({ message: 'Error adding task', error: err });
    } else {
      logActivity(req.user.id, projectId, 'TASK_ADDED', task.id);
      res.status(201).json({ message: 'Task added successfully', task });
    }
  });
});

// Update an existing task
router.put('/tasks/:taskId', isAuthenticated, (req, res) => {
  const { taskId } = req.params;
  const taskUpdates = req.body;
  updateTask(taskId, taskUpdates, (err, task) => {
    if (err) {
      res.status(500).json({ message: 'Error updating task', error: err });
    } else {
      logActivity(req.user.id, task.projectId, 'TASK_UPDATED', taskId);
      res.status(200).json({ message: 'Task updated successfully', task });
    }
  });
});

// Delete a task
router.delete('/tasks/:taskId', isAuthenticated, (req, res) => {
  const { taskId } = req.params;
  deleteTask(taskId, (err, task) => {
    if (err) {
      res.status(500).json({ message: 'Error deleting task', error: err });
    } else {
      logActivity(req.user.id, task.projectId, 'TASK_DELETED', taskId);
      res.status(200).json({ message: 'Task deleted successfully' });
    }
  });
});

// Invite a new member to a task
router.post('/tasks/:taskId/invite', isAuthenticated, (req, res) => {
  const { taskId } = req.params;
  const { email, role } = req.body;
  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }
  inviteMember(taskId, email, role, (err, invitation) => {
    if (err) {
      res.status(500).json({ message: 'Error inviting member', error: err });
    } else {
      logActivity(req.user.id, invitation.projectId, 'MEMBER_INVITED', invitation.id);
      res.status(201).json({ message: 'Member invited successfully', invitation });
    }
  });
});

// Update a member's role in a task
router.put('/tasks/:taskId/members/:memberId', isAuthenticated, (req, res) => {
  const { taskId, memberId } = req.params;
  const { role } = req.body;
  updateMemberRole(taskId, memberId, role, (err, member) => {
    if (err) {
      res.status(500).json({ message: 'Error updating member role', error: err });
    } else {
      logActivity(req.user.id, member.projectId, 'MEMBER_ROLE_UPDATED', memberId);
      res.status(200).json({ message: 'Member role updated successfully', member });
    }
  });
});

module.exports = router;