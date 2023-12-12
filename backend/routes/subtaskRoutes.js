const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Subtask = require('../models/Subtask');
const errorHandler = require('../utils/errorHandler');

// Get all subtasks
router.get('/api/subtasks', auth, async (req, res) => {
    try {
        const subtasks = await Subtask.find({ user: req.user.id });
        res.json(subtasks);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Get a specific subtask
router.get('/api/subtasks/:subtaskId', auth, async (req, res) => {
    try {
        const subtask = await Subtask.findById(req.params.subtaskId);
        if (!subtask) {
            return res.status(404).json({ msg: 'Subtask not found' });
        }
        res.json(subtask);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Create a new subtask
router.post('/api/subtasks', auth, async (req, res) => {
    try {
        const newSubtask = new Subtask({
            user: req.user.id,
            ...req.body
        });
        const subtask = await newSubtask.save();
        res.json(subtask);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Update a subtask
router.put('/api/subtasks/:subtaskId', auth, async (req, res) => {
    try {
        const subtask = await Subtask.findByIdAndUpdate(req.params.subtaskId, req.body, { new: true });
        if (!subtask) {
            return res.status(404).json({ msg: 'Subtask not found' });
        }
        res.json(subtask);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Delete a subtask
router.delete('/api/subtasks/:subtaskId', auth, async (req, res) => {
    try {
        const subtask = await Subtask.findByIdAndRemove(req.params.subtaskId);
        if (!subtask) {
            return res.status(404).json({ msg: 'Subtask not found' });
        }
        res.json({ msg: 'Subtask removed' });
    } catch (err) {
        errorHandler(err, res);
    }
});

module.exports = router;