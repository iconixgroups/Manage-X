import axios from 'axios';
import { TASK_ADDED, TASK_UPDATED, TASK_DELETED, UPDATE_PROJECT_COUNT } from '../../utils/constants';

const state = {
  tasks: [],
  currentTask: null,
};

const getters = {
  allTasks: (state) => state.tasks,
  currentTask: (state) => state.currentTask,
};

const actions = {
  async fetchTasks({ commit }, projectId) {
    try {
      const response = await axios.get(`/api/projects/${projectId}/tasks`);
      commit('setTasks', response.data);
    } catch (error) {
      console.error(error);
    }
  },
  async addTask({ commit }, { projectId, taskData }) {
    try {
      const response = await axios.post(`/api/projects/${projectId}/tasks`, taskData);
      commit('newTask', response.data);
      commit(UPDATE_PROJECT_COUNT, { projectId, count: 1 }, { root: true });
    } catch (error) {
      console.error(error);
    }
  },
  async updateTask({ commit }, { projectId, taskId, taskData }) {
    try {
      const response = await axios.put(`/api/projects/${projectId}/tasks/${taskId}`, taskData);
      commit('modifyTask', response.data);
    } catch (error) {
      console.error(error);
    }
  },
  async deleteTask({ commit }, { projectId, taskId }) {
    try {
      await axios.delete(`/api/projects/${projectId}/tasks/${taskId}`);
      commit('removeTask', taskId);
      commit(UPDATE_PROJECT_COUNT, { projectId, count: -1 }, { root: true });
    } catch (error) {
      console.error(error);
    }
  },
  async setTask({ commit }, task) {
    commit('setCurrentTask', task);
  },
};

const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  newTask: (state, task) => state.tasks.unshift(task),
  modifyTask: (state, updatedTask) => {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
  },
  removeTask: (state, taskId) => (state.tasks = state.tasks.filter((task) => task.id !== taskId)),
  setCurrentTask: (state, task) => (state.currentTask = task),
};

export default {
  state,
  getters,
  actions,
  mutations,
};