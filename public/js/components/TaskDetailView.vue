<template>
  <div class="task-detail-view">
    <div v-if="task" class="task-card">
      <h3>{{ task.name }}</h3>
      <p><strong>Description:</strong> {{ task.description }}</p>
      <p><strong>Status:</strong> {{ task.status }}</p>
      <p><strong>Category:</strong> {{ task.category }}</p>
      <p><strong>Start Date:</strong> {{ formatDate(task.startDate) }}</p>
      <p><strong>Deadline:</strong> {{ formatDate(task.deadline) }}</p>
      <p><strong>Assigned To:</strong> <span v-for="member in task.assignedMembers" :key="member._id">{{ member.name }}</span></p>
      <div class="task-tags">
        <span v-for="tag in task.tags" :key="tag" :style="{ backgroundColor: tag.color }" class="task-tag">{{ tag.text }}</span>
      </div>
      <div class="task-files">
        <h4>Attachments:</h4>
        <ul>
          <li v-for="file in task.files" :key="file.name">
            <a :href="file.url" target="_blank">{{ file.name }}</a>
          </li>
        </ul>
      </div>
      <button @click="editTask(task)">Edit Task</button>
    </div>
    <div v-else>
      <p>Task not found or has been deleted.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { formatDate } from '@/js/utils/formatters';

export default {
  name: 'TaskDetailView',
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      task: state => state.task.tasks.find(task => task._id === this.taskId)
    })
  },
  methods: {
    ...mapActions('task', ['fetchTask', 'editTask']),
    formatDate
  },
  created() {
    this.fetchTask(this.taskId);
  }
};
</script>

<style scoped>
.task-detail-view {
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-card h3 {
  margin-top: 0;
}

.task-tag {
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.8em;
}

.task-files ul {
  list-style-type: none;
  padding-left: 0;
}

.task-files a {
  text-decoration: none;
  color: #007bff;
}

.task-files a:hover {
  text-decoration: underline;
}
</style>