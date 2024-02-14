import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Auth API endpoints
export const registerUser = userData => api.post('/auth/register', userData);
export const loginUser = credentials => api.post('/auth/login', credentials);
export const verifyEmail = token => api.get(`/auth/verify-email/${token}`);

// User API endpoints
export const updateUserProfile = (userId, profileData) => api.put(`/user/${userId}`, profileData);

// Workspace API endpoints
export const createWorkspace = workspaceData => api.post('/workspace', workspaceData);
export const getWorkspaceDetails = workspaceId => api.get(`/workspace/${workspaceId}`);
export const updateWorkspace = (workspaceId, workspaceData) => api.put(`/workspace/${workspaceId}`, workspaceData);

// Project API endpoints
export const addProject = projectData => api.post('/project', projectData);
export const getProjectDetails = projectId => api.get(`/project/${projectId}`);
export const updateProject = (projectId, projectData) => api.put(`/project/${projectId}`, projectData);
export const deleteProject = projectId => api.delete(`/project/${projectId}`);

// Task API endpoints
export const addTask = (projectId, taskData) => api.post(`/project/${projectId}/task`, taskData);
export const getTaskDetails = (projectId, taskId) => api.get(`/project/${projectId}/task/${taskId}`);
export const updateTask = (projectId, taskId, taskData) => api.put(`/project/${projectId}/task/${taskId}`, taskData);
export const deleteTask = (projectId, taskId) => api.delete(`/project/${projectId}/task/${taskId}`);

// Activity Log API endpoints
export const getActivityLog = projectId => api.get(`/project/${projectId}/activity-log`);

// Subscription and Contact API endpoints
export const subscribeNewsletter = email => api.post('/subscribe-newsletter', { email });
export const submitContactForm = contactData => api.post('/contact', contactData);

export default api;