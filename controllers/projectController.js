const Project = require('../models/Project');
const User = require('../models/User');
const Workspace = require('../models/Workspace');
const ActivityLog = require('../models/ActivityLog');
const { logActivity } = require('./activityController');

const addProject = async (req, res) => {
    try {
        const { name, category, logo, colorHexCode, startDate, completionDate, status, boqFile, textTags, members } = req.body;
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
        const updates = req.body;

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

const deleteProject = async (req, res) => {
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