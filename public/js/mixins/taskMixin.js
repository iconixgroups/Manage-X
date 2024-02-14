import { constants } from '../utils/constants.js';
import { helpers } from '../utils/helpers.js';
import { validators } from '../utils/validators.js';
import { storeModules } from '../store/index.js';

export default {
  methods: {
    addTask(taskDetails) {
      if (!validators.validateTaskDetails(taskDetails)) {
        return false;
      }
      const newTask = {
        ...taskDetails,
        status: constants.TASK_STATUS_PENDING,
        startDate: helpers.formatDate(new Date()),
        sNo: helpers.incrementTaskNumber(storeModules.task.state.tasks)
      };
      storeModules.task.commit('ADD_TASK', newTask);
      this.logActivity(constants.TASK_ADDED, newTask);
      return true;
    },
    updateTask(taskId, updatedDetails) {
      if (!validators.validateTaskDetails(updatedDetails)) {
        return false;
      }
      storeModules.task.commit('UPDATE_TASK', { taskId, updatedDetails });
      this.logActivity(constants.TASK_UPDATED, { taskId, updatedDetails });
      return true;
    },
    deleteTask(taskId) {
      storeModules.task.commit('DELETE_TASK', taskId);
      this.logActivity(constants.TASK_DELETED, { taskId });
    },
    logActivity(event, details) {
      const activity = {
        event,
        details,
        timestamp: new Date().toISOString()
      };
      storeModules.activityLog.commit('LOG_ACTIVITY', activity);
    }
  }
};