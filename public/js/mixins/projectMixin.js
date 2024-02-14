import { projectSchema } from '../models/Project';
import { updateProjectCount, logActivity } from '../utils/helpers';
import { PROJECT_ADDED, PROJECT_UPDATED, MEMBER_INVITED, MEMBER_ROLE_UPDATED } from '../utils/constants';

export default {
  methods: {
    createProject(projectData) {
      const newProject = new projectSchema(projectData);
      newProject.save((err, project) => {
        if (err) {
          console.error('Error creating new project:', err);
        } else {
          logActivity(PROJECT_ADDED, project._id, `Project ${project.name} created.`);
          updateProjectCount(project.workspaceId, 1);
        }
      });
    },
    updateProject(projectId, updatedData) {
      projectSchema.findByIdAndUpdate(projectId, updatedData, { new: true }, (err, project) => {
        if (err) {
          console.error('Error updating project:', err);
        } else {
          logActivity(PROJECT_UPDATED, project._id, `Project ${project.name} updated.`);
        }
      });
    },
    inviteMemberToProject(projectId, memberEmail, accessRole) {
      // Implementation for inviting a member to the project
      // This would typically involve sending an email to the member
      // and adding an entry to the project's members list with the specified role
      logActivity(MEMBER_INVITED, projectId, `Member invited to project with email: ${memberEmail}`);
    },
    updateMemberRole(projectId, memberId, newRole) {
      // Implementation for updating a member's role within a project
      logActivity(MEMBER_ROLE_UPDATED, projectId, `Member role updated for member ID: ${memberId}`);
    }
  }
};