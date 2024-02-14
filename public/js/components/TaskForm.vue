<template>
  <div class="task-form-container">
    <form @submit.prevent="submitTaskForm">
      <div class="form-group">
        <label for="taskName">Task Name</label>
        <input type="text" id="taskName" v-model="task.name" required>
      </div>
      <div class="form-group">
        <label for="taskStatus">Task Status</label>
        <select id="taskStatus" v-model="task.status" required>
          <option value="Pending">Pending</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div class="form-group">
        <label for="taskCategory">Task Category</label>
        <select id="taskCategory" v-model="task.category" required>
          <option v-for="category in categories" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="taskStartDate">Start Date</label>
        <input type="date" id="taskStartDate" v-model="task.startDate" :max="new Date().toISOString().split('T')[0]" required>
      </div>
      <div class="form-group">
        <label for="taskDeadline">Deadline</label>
        <input type="date" id="taskDeadline" v-model="task.deadline" :min="task.startDate" required>
      </div>
      <div class="form-group">
        <label for="taskAssignee">Assign To</label>
        <select id="taskAssignee" v-model="task.assignee" required>
          <option v-for="member in members" :value="member.id">{{ member.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="taskFiles">Attachments</label>
        <input type="file" id="taskFiles" @change="handleFileUpload" multiple>
      </div>
      <button type="submit" class="btn btn-primary">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      task: {
        name: '',
        status: '',
        category: '',
        startDate: '',
        deadline: '',
        assignee: '',
        files: []
      },
      categories: [], // This should be populated with categories from project settings
      members: [] // This should be populated with members from the current project
    };
  },
  methods: {
    submitTaskForm() {
      // Logic to submit the task form data
      // This should include validation and sending data to the server
      console.log('Task form submitted:', this.task);
    },
    handleFileUpload(event) {
      const files = event.target.files;
      if (files) {
        this.task.files = Array.from(files).slice(0, 20); // Limit to 20 files
      }
    }
  },
  mounted() {
    // Fetch categories and members when the component is mounted
    // this.fetchCategories();
    // this.fetchMembers();
  }
};
</script>

<style scoped>
.task-form-container {
  max-width: 600px;
  margin: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
</style>