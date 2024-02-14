const Task = require('../models/Task');
const Project = require('../models/Project');
const { logActivity } = require('./activityLogController');

const taskController = {
  addTask: async (req, res) => {
    try {
      const { projectId, taskDetails } = req.body;
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }

      const newTask = new Task({
        ...taskDetails,
        project: projectId,
        status: 'Not Started', // default status
      });

      const savedTask = await newTask.save();
      project.tasks.push(savedTask._id);
      await project.save();

      logActivity(req.user.id, projectId, `TASK_ADDED`, savedTask._id);

      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateTask: async (req, res) => {
    try {
      const { taskId, taskUpdates } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(taskId, taskUpdates, { new: true });

      logActivity(req.user.id, updatedTask.project, `TASK_UPDATED`, taskId);

      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const { taskId } = req.params;
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }

      const projectId = task.project;
      await Task.findByIdAndRemove(taskId);

      const project = await Project.findById(projectId);
      project.tasks.pull(taskId);
      await project.save();

      logActivity(req.user.id, projectId, `TASK_DELETED`, taskId);

      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getTasksByProject: async (req, res) => {
    try {
      const { projectId } = req.params;
      const tasks = await Task.find({ project: projectId }).populate('assignedTo', 'firstName lastName');

      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = taskController;