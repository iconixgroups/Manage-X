import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import reducers from store modules
import authReducer from '../store/modules/auth';
import userReducer from '../store/modules/user';
import projectReducer from '../store/modules/project';
import taskReducer from '../store/modules/task';
import activityLogReducer from '../store/modules/activityLog';
import uiReducer from '../store/modules/ui';

// Combine all the reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  project: projectReducer,
  task: taskReducer,
  activityLog: activityLogReducer,
  ui: uiReducer
});

// Enable Redux DevTools Extension if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;