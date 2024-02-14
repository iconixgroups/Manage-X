import axios from 'axios';
import { USER_REGISTERED, USER_LOGGED_IN, USER_PROFILE_UPDATED } from '../../utils/constants';

const state = {
  user: null,
  token: localStorage.getItem('token') || '',
  status: '',
};

const getters = {
  isAuthenticated: state => !!state.token,
  user: state => state.user,
  authStatus: state => state.status,
};

const actions = {
  async registerUser({ commit }, userData) {
    try {
      commit('auth_request');
      const response = await axios.post('/api/users/register', userData);
      if (response.data.success) {
        commit('auth_success', response.data);
        commit('user_registered', response.data.user);
      }
      return response.data;
    } catch (error) {
      commit('auth_error', error);
      throw error;
    }
  },

  async loginUser({ commit }, userCredentials) {
    try {
      commit('auth_request');
      const response = await axios.post('/api/users/login', userCredentials);
      if (response.data.success) {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', { token, user });
        commit('user_logged_in', user);
      }
      return response.data;
    } catch (error) {
      commit('auth_error', error);
      localStorage.removeItem('token');
      throw error;
    }
  },

  async updateUserProfile({ commit }, userProfile) {
    try {
      commit('profile_request');
      const response = await axios.put('/api/users/profile', userProfile);
      if (response.data.success) {
        commit('profile_updated', response.data.user);
      }
      return response.data;
    } catch (error) {
      commit('profile_error', error);
      throw error;
    }
  },

  logoutUser({ commit }) {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    commit('logout');
  },
};

const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, { token, user }) {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  auth_error(state, error) {
    state.status = 'error';
    console.error('Auth Error:', error);
  },
  logout(state) {
    state.status = '';
    state.token = '';
    state.user = null;
  },
  user_registered(state, user) {
    state.user = user;
    state.status = USER_REGISTERED;
  },
  user_logged_in(state, user) {
    state.user = user;
    state.status = USER_LOGGED_IN;
  },
  profile_request(state) {
    state.status = 'updating_profile';
  },
  profile_updated(state, user) {
    state.user = user;
    state.status = USER_PROFILE_UPDATED;
  },
  profile_error(state, error) {
    state.status = 'profile_update_error';
    console.error('Profile Update Error:', error);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};