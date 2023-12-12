const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');
const errorHandler = require('../utils/errorHandler');

// Get all projects
router.get('/api/projects', auth, async (req, res) => {
    try {
        const projects = await Project.find({ owner: req.user.id });
        res.json(projects);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Get a specific project
router.get('/api/projects/:project_id', auth, async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.project_id, owner: req.user.id });
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Create a new project
router.post('/api/projects', auth, async (req, res) => {
    try {
        const newProject = new Project({
            ...req.body,
            owner: req.user.id
        });
        const project = await newProject.save();
        res.status(201).json(project);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Update a project
router.put('/api/projects/:project_id', auth, async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.params.project_id, owner: req.user.id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        errorHandler(res, err);
    }
});

// Delete a project
router.delete('/api/projects/:project_id', auth, async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.project_id, owner: req.user.id });
        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }
        res.json({ msg: 'Project deleted' });
    } catch (err) {
        errorHandler(res, err);
    }
});

module.exports = router;