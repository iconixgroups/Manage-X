<template>
  <div class="task-status-update-form">
    <form @submit.prevent="updateTaskStatus">
      <div class="form-group">
        <label for="taskStatus">Task Status</label>
        <select id="taskStatus" v-model="taskStatus" class="form-control">
          <option value="Pending">Pending</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Update Status</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskStatusUpdateForm',
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      taskStatus: ''
    };
  },
  methods: {
    updateTaskStatus() {
      // Emit an event to the parent component with the new status and task ID
      this.$emit('status-updated', { taskId: this.taskId, status: this.taskStatus });
    }
  }
};
</script>

<style scoped>
.task-status-update-form {
  max-width: 300px;
  margin: auto;
}
</style>