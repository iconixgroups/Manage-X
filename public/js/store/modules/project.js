import axios from 'axios';
import { PROJECT_ADDED, PROJECT_UPDATED, PROJECT_DELETED, MEMBER_INVITED, MEMBER_ROLE_UPDATED } from '../../utils/constants';

const state = {
  projects: [],
  currentProject: null
};

const getters = {
  allProjects: (state) => state.projects,
  currentProject: (state) => state.currentProject
};

const actions = {
  async fetchProjects({ commit }) {
    const response = await axios.get('/api/projects');
    commit('setProjects', response.data);
  },
  async addProject({ commit }, projectData) {
    const response = await axios.post('/api/projects', projectData);
    commit('newProject', response.data);
    commit('setMessage', PROJECT_ADDED);
  },
  async updateProject({ commit }, projectData) {
    const response = await axios.put(`/api/projects/${projectData.id}`, projectData);
    commit('updateProject', response.data);
    commit('setMessage', PROJECT_UPDATED);
  },
  async deleteProject({ commit }, id) {
    await axios.delete(`/api/projects/${id}`);
    commit('removeProject', id);
    commit('setMessage', PROJECT_DELETED);
  },
  async inviteMember({ commit }, { projectId, memberData }) {
    const response = await axios.post(`/api/projects/${projectId}/invite`, memberData);
    commit('addMember', { projectId, member: response.data });
    commit('setMessage', MEMBER_INVITED);
  },
  async updateMemberRole({ commit }, { projectId, userId, role }) {
    const response = await axios.put(`/api/projects/${projectId}/members/${userId}`, { role });
    commit('setMemberRole', { projectId, userId, role: response.data.role });
    commit('setMessage', MEMBER_ROLE_UPDATED);
  }
};

const mutations = {
  setProjects: (state, projects) => (state.projects = projects),
  newProject: (state, project) => state.projects.unshift(project),
  updateProject: (state, updatedProject) => {
    const index = state.projects.findIndex(project => project.id === updatedProject.id);
    if (index !== -1) {
      state.projects.splice(index, 1, updatedProject);
    }
  },
  removeProject: (state, id) => (state.projects = state.projects.filter(project => project.id !== id)),
  addMember: (state, { projectId, member }) => {
    const project = state.projects.find(project => project.id === projectId);
    if (project) {
      project.members.push(member);
    }
  },
  setMemberRole: (state, { projectId, userId, role }) => {
    const project = state.projects.find(project => project.id === projectId);
    if (project) {
      const member = project.members.find(member => member.id === userId);
      if (member) {
        member.role = role;
      }
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};