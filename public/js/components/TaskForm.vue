<template>
  <div class="task-form-container">
    <form @submit.prevent="submitTaskForm">
      <div class="form-group">
        <label for="taskName">Task Name</label>
        <input type="text" id="taskName" v-model="task.name" :class="{'is-invalid': !validateNonEmptyString(task.name)}" required>
        <div v-if="!validateNonEmptyString(task.name)" class="invalid-feedback">
          Task name is required.
        </div>
      </div>
      <div class="form-group">
        <label for="taskStatus">Task Status</label>
        <select id="taskStatus" v-model="task.status" :class="{'is-invalid': !validateTaskStatus(task.status)}" required>
        <div v-if="!validateTaskStatus(task.status)" class="invalid-feedback">
          Please select a valid task status.
        </div>
          <option value="Pending">Pending</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="On Hold">On Hold</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div class="form-group">
        <label for="taskCategory">Task Category</label>
        <select id="taskCategory" v-model="task.category" :class="{'is-invalid': !validateNonEmptyString(task.category)}" required>
        <div v-if="!validateNonEmptyString(task.category)" class="invalid-feedback">
          Please select a task category.
        </div>
          <option v-for="category in categories" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="taskStartDate">Start Date</label>
        <input type="date" id="taskStartDate" v-model="task.startDate" :class="{'is-invalid': !validateDate(task.startDate)}" :max="new Date().toISOString().split('T')[0]" required>
        <div v-if="!validateDate(task.startDate)" class="invalid-feedback">
          Please enter a valid start date.
        </div>
      </div>
      <div class="form-group">
        <label for="taskDeadline">Deadline</label>
        <input type="date" id="taskDeadline" v-model="task.deadline" :class="{'is-invalid': !validateDate(task.deadline) || !validateDateRange(task.startDate, task.deadline)}" :min="task.startDate" required>
        <div v-if="!validateDate(task.deadline) || !validateDateRange(task.startDate, task.deadline)" class="invalid-feedback">
          Please enter a valid deadline that is after the start date.
        </div>
      </div>
      <div class="form-group">
        <label for="taskAssignee">Assign To</label>
        <select id="taskAssignee" v-model="task.assignee" :class="{'is-invalid': !validateNonEmptyString(task.assignee)}" required>
        <div v-if="!validateNonEmptyString(task.assignee)" class="invalid-feedback">
          Please select an assignee.
        </div>
          <option v-for="member in members" :value="member.id">{{ member.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="taskFiles">Attachments</label>
        <input type="file" id="taskFiles" @change="handleFileUpload" :class="{'is-invalid': task.files.some(file => !validateFileSize(file.size, 20))}" multiple>
        <div v-if="task.files.some(file => !validateFileSize(file.size, 20))" class="invalid-feedback">
          Each file must be less than 20MB.
        </div>
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
import { validateNonEmptyString, validateTaskStatus, validateDate, validateDateRange, validateFileSize } from '../utils/validators';
  computed: {
    validateNonEmptyString() {
      return validateNonEmptyString;
    },
    validateTaskStatus() {
      return validateTaskStatus;
    },
    validateDate() {
      return validateDate;
    },
    validateDateRange() {
      return validateDateRange;
    },
    validateFileSize() {
      return validateFileSize;
    }
  },