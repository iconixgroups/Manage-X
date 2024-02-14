import axios from 'axios';
import { ACTIVITY_LOG_UPDATED } from '../../utils/constants';

const state = {
  activityLogs: []
};

const getters = {
  allActivityLogs: state => state.activityLogs
};

const actions = {
  async fetchActivityLogs({ commit }, projectId) {
    try {
      const response = await axios.get(`/api/projects/${projectId}/activity-logs`);
      commit('setActivityLogs', response.data);
    } catch (error) {
      console.error('Error fetching activity logs:', error);
    }
  },
  async logActivity({ commit }, { projectId, log }) {
    try {
      const response = await axios.post(`/api/projects/${projectId}/activity-logs`, log);
      commit('newActivityLog', response.data);
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  }
};

const mutations = {
  setActivityLogs: (state, activityLogs) => (state.activityLogs = activityLogs),
  newActivityLog: (state, log) => {
    state.activityLogs.unshift(log);
    state.activityLogs = [...state.activityLogs]; // Trigger reactivity
  },
  updateActivityLog: (state, updatedLog) => {
    const index = state.activityLogs.findIndex(log => log.id === updatedLog.id);
    if (index !== -1) {
      state.activityLogs.splice(index, 1, updatedLog);
      state.activityLogs = [...state.activityLogs]; // Trigger reactivity
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};