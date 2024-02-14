import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm.vue';
import LoginForm from '../components/LoginForm.vue';
import UserProfileSettings from '../components/UserProfileSettings.vue';
import WorkspaceOverview from '../components/WorkspaceOverview.vue';
import ProjectDetails from '../components/ProjectDetails.vue';
import TaskTreeView from '../components/TaskTreeView.vue';
import Dashboard from '../components/Dashboard.vue';
import NotFoundPage from '../components/NotFoundPage.vue';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/user-profile-settings" component={UserProfileSettings} />
        <Route path="/workspace-overview" component={WorkspaceOverview} />
        <Route path="/project-details/:projectId" component={ProjectDetails} />
        <Route path="/task-tree-view/:projectId" component={TaskTreeView} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default Routes;