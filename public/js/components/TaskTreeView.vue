<template>
  <div class="task-tree-view">
    <div class="task-tree-header">
      <button @click="toggleSideMenu" class="btn btn-secondary">
        <i class="material-icons">menu</i>
      </button>
      <h2>Tasks</h2>
      <button @click="addTask" class="btn btn-primary">
        <i class="material-icons">add</i> Add Task
      </button>
    </div>
    <div class="task-tree-content">
      <ul class="task-list">
        <li v-for="(task, index) in tasks" :key="task.id" class="task-item">
          <div class="task-details">
            <span class="task-sno">{{ index + 1 }}</span>
            <span class="task-description">{{ task.description }}</span>
            <span :style="{ backgroundColor: task.tagColor }" class="task-tag">{{ task.tag }}</span>
            <span class="task-category">{{ task.category }}</span>
            <span class="task-status">{{ task.status }}</span>
            <span class="task-start-date">{{ formatDate(task.startDate) }}</span>
            <span class="task-deadline-date">{{ formatDate(task.deadlineDate) }}</span>
            <span class="task-delayed-duration">{{ task.delayedDuration }}</span>
          </div>
          <div class="task-actions">
            <button @click="editTask(task)" class="btn btn-sm btn-outline-secondary">
              <i class="material-icons">edit</i>
            </button>
            <button @click="deleteTask(task)" class="btn btn-sm btn-outline-danger">
              <i class="material-icons">delete</i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { formatDate } from '@/js/utils/formatters';

export default {
  name: 'TaskTreeView',
  computed: {
    ...mapState({
      tasks: state => state.task.tasks
    })
  },
  methods: {
    ...mapActions('task', ['addTask', 'editTask', 'deleteTask']),
    toggleSideMenu() {
      // Logic to toggle side menu
    },
    formatDate
  }
};
</script>

<style scoped>
.task-tree-view {
  padding: 1rem;
}

.task-tree-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.task-tree-content {
  background-color: #f8f9fa;
  border-radius: 0.25rem;
  padding: 1rem;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e1e1e1;
}

.task-details span {
  margin-right: 1rem;
}

.task-actions button {
  margin-left: 0.5rem;
}

.task-sno,
.task-description,
.task-tag,
.task-category,
.task-status,
.task-start-date,
.task-deadline-date,
.task-delayed-duration {
  white-space: nowrap;
}

.task-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: #fff;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.material-icons {
  font-size: 1rem;
  vertical-align: middle;
}
</style>