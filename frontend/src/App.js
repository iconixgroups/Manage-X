```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import SubtaskForm from './components/SubtaskForm';
import KanbanBoard from './components/KanbanBoard';
import Chat from './components/Chat';
import Notification from './components/Notification';
import FileUpload from './components/FileUpload';
import SearchBar from './components/SearchBar';
import Error from './components/Error';
import Loading from './components/Loading';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/project/new" component={ProjectForm} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/task/new" component={TaskForm} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/subtask/new" component={SubtaskForm} />
        <Route path="/kanban" component={KanbanBoard} />
        <Route path="/chat" component={Chat} />
        <Route path="/notifications" component={Notification} />
        <Route path="/upload" component={FileUpload} />
        <Route path="/search" component={SearchBar} />
        <Route path="/error" component={Error} />
        <Route path="/loading" component={Loading} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
```