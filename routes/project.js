const express = require('express');
const router = express.Router();
const { addProject, updateProject, deleteProject, getProjectDetails, inviteMemberToProject, updateMemberRole, getProjectSettings } = require('../controllers/projectController');
const { logActivity } = require('../controllers/taskController'); // Assuming activity logging is also managed in taskController

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  // This should be replaced with actual authentication logic
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// Create a new project
router.post('/create', isAuthenticated, (req, res) => {
  addProject(req.body, (err, project) => {
    if (err) {
      res.status(500).send(err);
    } else {
      logActivity(req.user.id, project.id, 'PROJECT_ADDED');
      res.status(201).send(project);
    }
  });
});

// Update project details
router.put('/update/:projectId', isAuthenticated, (req, res) => {
  updateProject(req.params.projectId, req.body, (err, project) => {
    if (err) {
      res.status(500).send(err);
    } else {
      logActivity(req.user.id, req.params.projectId, 'PROJECT_UPDATED');
      res.status(200).send(project);
    }
  });
});

// Delete a project
router.delete('/delete/:projectId', isAuthenticated, (req, res) => {
  deleteProject(req.params.projectId, (err, project) => {
    if (err) {
      res.status(500).send(err);
    } else {
      logActivity(req.user.id, req.params.projectId, 'PROJECT_DELETED');
      res.status(200).send({ message: 'Project deleted successfully', project });
    }
  });
});

// Get project details
router.get('/details/:projectId', isAuthenticated, (req, res) => {
  getProjectDetails(req.params.projectId, (err, project) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(project);
    }
  });
});

// Invite a new member to the project
router.post('/invite/:projectId', isAuthenticated, (req, res) => {
  inviteMemberToProject(req.params.projectId, req.body, (err, invitation) => {
    if (err) {
      res.status(500).send(err);
    } else {
      logActivity(req.user.id, req.params.projectId, 'MEMBER_INVITED');
      res.status(200).send(invitation);
    }
  });
});

// Update project member role
router.put('/updateMemberRole/:projectId', isAuthenticated, (req, res) => {
  updateMemberRole(req.params.projectId, req.body, (err, member) => {
    if (err) {
      res.status(500).send(err);
    } else {
      logActivity(req.user.id, req.params.projectId, 'MEMBER_ROLE_UPDATED');
      res.status(200).send(member);
    }
  });
});

// Get project settings
router.get('/settings/:projectId', isAuthenticated, (req, res) => {
  getProjectSettings(req.params.projectId, (err, settings) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(settings);
    }
  });
});

module.exports = router;