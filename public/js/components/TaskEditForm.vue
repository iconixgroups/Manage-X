<template>
  <div class="task-edit-form">
    <h2>Edit Task</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="task-name">Task Name</label>
        <input type="text" id="task-name" v-model="task.name" required>
      </div>
      <div class="form-group">
        <label for="task-category">Category</label>
        <select id="task-category" v-model="task.category">
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="task-status">Status</label>
        <select id="task-status" v-model="task.status">
          <option value="Pending">Pending</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div class="form-group">
        <label for="task-start-date">Start Date</label>
        <input type="date" id="task-start-date" v-model="task.startDate" required>
      </div>
      <div class="form-group">
        <label for="task-deadline-date">Deadline Date</label>
        <input type="date" id="task-deadline-date" v-model="task.deadlineDate" required>
      </div>
      <div class="form-group">
        <label for="task-tags">Tags</label>
        <input type="text" id="task-tags" v-model="task.tags">
      </div>
      <div class="form-group">
        <label for="task-assignee">Assign To</label>
        <select id="task-assignee" v-model="task.assignee">
          <option v-for="member in projectMembers" :key="member.id" :value="member.id">{{ member.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="task-files">Attachments</label>
        <input type="file" id="task-files" @change="handleFileUpload" multiple>
      </div>
      <button type="submit" class="btn btn-primary">Update Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskEditForm',
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      task: {
        name: '',
        category: '',
        status: '',
        startDate: '',
        deadlineDate: '',
        tags: '',
        assignee: '',
        files: []
      },
      categories: [],
      projectMembers: []
    };
  },
  created() {
    this.fetchTaskDetails();
    this.fetchCategories();
    this.fetchProjectMembers();
  },
  methods: {
    fetchTaskDetails() {
      // Fetch task details from the API and populate the form
      // Placeholder for actual API call
      console.log('Fetching task details for task ID:', this.taskId);
    },
    fetchCategories() {
      // Fetch categories from the API
      // Placeholder for actual API call
      console.log('Fetching categories');
    },
    fetchProjectMembers() {
      // Fetch project members from the API
      // Placeholder for actual API call
      console.log('Fetching project members');
    },
    handleFileUpload(event) {
      this.task.files = Array.from(event.target.files);
    },
    submitForm() {
      // Submit updated task details to the API
      // Placeholder for actual API call
      console.log('Submitting updated task details:', this.task);
    }
  }
};
</script>

<style scoped>
.task-edit-form {
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