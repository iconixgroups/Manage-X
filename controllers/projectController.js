const Project = require('../models/Project');
const User = require('../models/User');
const Workspace = require('../models/Workspace');
const ActivityLog = require('../models/ActivityLog');
const { logActivity } = require('./activityController');

const addProject = async (req, res) => {
    try {
        const { name, category, logo, colorCode, startDate, endDate, members } = req.body;
        if (!name || !category || !logo || !colorCode || !startDate || !endDate) {
            return res.status(400).json({ message: 'Missing required project fields' });
        }
        const workspaceId = req.params.workspaceId;
        const workspace = await Workspace.findById(workspaceId);

        if (!workspace) {
            return res.status(404).json({ message: 'Workspace not found' });
        }

        const newProject = new Project({
            name,
            category,
            logo,
            colorHexCode,
            startDate,
            completionDate,
            status,
            boqFile,
            textTags,
            members,
            workspace: workspaceId
        });

        const project = await newProject.save();

        // Update workspace with new project
        workspace.projects.push(project._id);
        await workspace.save();

        // Log activity
        logActivity({
            type: 'PROJECT_ADDED',
            author: req.user._id,
            workspace: workspaceId,
            project: project._id,
            description: `Project ${name} was added`
        });

        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const { name, category, logo, colorCode, startDate, endDate, members } = req.body;
        if (!name || !category || !logo || !colorCode || !startDate || !endDate) {
            return res.status(400).json({ message: 'Missing required project fields' });
        }
        const updates = { name, category, logo, colorCode, startDate, endDate, members };

        const project = await Project.findByIdAndUpdate(projectId, updates, { new: true });

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Log activity
        logActivity({
            type: 'PROJECT_UPDATED',
            author: req.user._id,
            workspace: project.workspace,
            project: projectId,
            description: `Project ${project.name} was updated`
        });

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ensure JWT authentication
const jwt = require('jsonwebtoken');
const deleteProject = async (req, res) => {
    // Verify JWT token
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    try {
        const projectId = req.params.projectId;
        const project = await Project.findByIdAndDelete(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // Remove project from workspace
        const workspace = await Workspace.findById(project.workspace);
        if (workspace) {
            workspace.projects.pull(projectId);
            await workspace.save();
        }

        // Log activity
        logActivity({
            type: 'PROJECT_DELETED',
            author: req.user._id,
            workspace: project.workspace,
            project: projectId,
            description: `Project ${project.name} was deleted`
        });

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProjectDetails = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const project = await Project.findById(projectId).populate('members.user', 'firstName lastName email');

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addProject,
    updateProject,
    deleteProject,
    getProjectDetails
};
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    try {
        const projectId = req.params.projectId;
        const project = await Project.findById(projectId).populate('members.user', 'firstName lastName email');

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addProject,
    updateProject,
    deleteProject,
    getProjectDetails
};