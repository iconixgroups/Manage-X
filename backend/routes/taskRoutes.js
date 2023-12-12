const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');
const errorHandler = require('../utils/errorHandler');

// Get all tasks
router.get('/api/tasks', auth, async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Get a single task
router.get('/api/tasks/:task_id', auth, async (req, res) => {
    try {
        const task = await Task.findById(req.params.task_id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Create a new task
router.post('/api/tasks', auth, async (req, res) => {
    try {
        const newTask = new Task({
            user: req.user.id,
            ...req.body
        });
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Update a task
router.put('/api/tasks/:task_id', auth, async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.task_id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Delete a task
router.delete('/api/tasks/:task_id', auth, async (req, res) => {
    try {
        const task = await Task.findByIdAndRemove(req.params.task_id);
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }
        res.json({ msg: 'Task removed' });
    } catch (err) {
        errorHandler(err, res);
    }
});

module.exports = router;