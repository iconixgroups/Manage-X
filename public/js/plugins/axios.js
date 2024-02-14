import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your API base URL
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000 // Throw error if API call takes longer than 10 seconds
});

export default {
  registerUser(userData) {
    return apiClient.post('/auth/register', userData);
  },
  loginUser(credentials) {
    return apiClient.post('/auth/login', credentials);
  },
  updateUserProfile(profileData) {
    return apiClient.put('/user/profile', profileData);
  },
  createWorkspace(workspaceData) {
    return apiClient.post('/workspaces', workspaceData);
  },
  addProject(projectData) {
    return apiClient.post('/projects', projectData);
  },
  addTask(taskData) {
    return apiClient.post('/tasks', taskData);
  },
  updateTask(taskId, taskData) {
    return apiClient.put(`/tasks/${taskId}`, taskData);
  },
  deleteTask(taskId) {
    return apiClient.delete(`/tasks/${taskId}`);
  },
  inviteMember(inviteData) {
    return apiClient.post('/projects/invite', inviteData);
  },
  updateMemberRole(memberData) {
    return apiClient.put('/projects/member', memberData);
  },
  getWorkspaceDetails(workspaceId) {
    return apiClient.get(`/workspaces/${workspaceId}`);
  },
  getProjectDetails(projectId) {
    return apiClient.get(`/projects/${projectId}`);
  },
  getTaskDetails(taskId) {
    return apiClient.get(`/tasks/${taskId}`);
  },
  getActivityLog(projectId) {
    return apiClient.get(`/projects/${projectId}/activity`);
  },
  subscribeToNewsletter(email) {
    return apiClient.post('/newsletter/subscribe', { email });
  },
  submitContactForm(contactData) {
    return apiClient.post('/contact', contactData);
  }
};