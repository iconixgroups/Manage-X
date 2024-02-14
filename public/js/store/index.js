import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import user from './modules/user';
import project from './modules/project';
import task from './modules/task';
import activityLog from './modules/activityLog';
import ui from './modules/ui';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    user,
    project,
    task,
    activityLog,
    ui
  }
});