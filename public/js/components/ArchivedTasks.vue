<template>
  <div class="archived-tasks">
    <h2>Archived Tasks</h2>
    <div v-if="archivedTasks.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Task Description</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">Deadline Date</th>
            <th scope="col">Delayed Duration</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in archivedTasks" :key="task.id">
            <th scope="row">{{ task.serialNumber }}</th>
            <td>{{ task.description }}</td>
            <td>{{ task.category }}</td>
            <td :style="{ color: task.tagHexColorCode }">{{ task.status }}</td>
            <td>{{ formatDate(task.startDate) }}</td>
            <td>{{ formatDate(task.deadlineDate) }}</td>
            <td>{{ task.delayedDuration }}</td>
            <td>
              <button @click="restoreTask(task.id)" class="btn btn-primary">Restore</button>
              <button @click="permanentlyDeleteTask(task.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No archived tasks found.</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { formatDate } from '@/js/utils/formatters';

export default {
  name: 'ArchivedTasks',
  computed: {
    ...mapState({
      archivedTasks: state => state.task.archivedTasks
    })
  },
  methods: {
    ...mapActions('task', ['restoreTask', 'permanentlyDeleteTask']),
    formatDate
  }
};
</script>

<style scoped>
.archived-tasks {
  padding: 20px;
}
</style>