import axios from 'axios';
import { USER_REGISTERED, USER_LOGGED_IN, USER_PROFILE_UPDATED } from '../../utils/constants';

const state = {
  user: null,
  token: localStorage.getItem('token') || '',
  status: '',
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  user: state => state.user,
  status: state => state.status
};

const actions = {
  async registerUser({ commit }, userData) {
    commit('auth_request');
    try {
      const res = await axios.post('/api/users/register', userData);
      if (res.data.success !== undefined) {
        commit('auth_success', res.data);
      }
      return res;
    } catch (err) {
      commit('auth_error', err);
      throw err;
    }
  },
  async loginUser({ commit }, userCredentials) {
    commit('auth_request');
    try {
      const res = await axios.post('/api/users/login', userCredentials);
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;
      commit('auth_success', token, user);
      return res;
    } catch (err) {
      commit('auth_error', err);
      localStorage.removeItem('token');
      throw err;
    }
  },
  async updateUserProfile({ commit }, userProfile) {
    commit('profile_update_request');
    try {
      const res = await axios.put('/api/users/profile', userProfile);
      commit('profile_update_success', userProfile);
      return res;
    } catch (err) {
      commit('profile_update_error', err);
      throw err;
    }
  },
  logoutUser({ commit }) {
    return new Promise((resolve) => {
      commit('logout');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      resolve();
    });
  }
};

const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, token, user) {
    state.status = 'success';
    state.token = token;
    state.user = user;
    state.hasLoadedOnce = true;
  },
  auth_error(state) {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  profile_update_request(state) {
    state.status = 'loading';
  },
  profile_update_success(state, user) {
    state.status = 'success';
    state.user = user;
  },
  profile_update_error(state) {
    state.status = 'error';
  },
  logout(state) {
    state.token = '';
    state.user = null;
    state.status = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};