import Vue from 'vue';
import Router from 'vue-router';
import SignUpForm from '../components/SignUpForm.vue';
import LoginForm from '../components/LoginForm.vue';
import UserProfileSettings from '../components/UserProfileSettings.vue';
import WorkspaceOverview from '../components/WorkspaceOverview.vue';
import ProjectDetails from '../components/ProjectDetails.vue';
import TaskTreeView from '../components/TaskTreeView.vue';
import Dashboard from '../components/Dashboard.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpForm
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/user/profile',
      name: 'userProfile',
      component: UserProfileSettings
    },
    {
      path: '/workspace',
      name: 'workspaceOverview',
      component: WorkspaceOverview
    },
    {
      path: '/projects/:id',
      name: 'projectDetails',
      component: ProjectDetails
    },
    {
      path: '/projects/:id/tasks',
      name: 'taskTreeView',
      component: TaskTreeView
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFoundPage
    }
  ]
});

export default router;