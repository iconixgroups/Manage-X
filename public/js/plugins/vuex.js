import Vue from 'vue';
import Vuex from 'vuex';

import auth from '../store/modules/auth';
import user from '../store/modules/user';
import project from '../store/modules/project';
import task from '../store/modules/task';
import activityLog from '../store/modules/activityLog';
import ui from '../store/modules/ui';

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