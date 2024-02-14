<template>
  <div class="project-edit-form">
    <h2>Edit Project</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="project-name">Project Name</label>
        <input type="text" id="project-name" v-model="project.name" required>
      </div>
      <div class="form-group">
        <label for="project-category">Project Category</label>
        <select id="project-category" v-model="project.category">
          <option disabled value="">Please select one</option>
          <!-- Options will be populated from the project settings -->
        </select>
      </div>
      <div class="form-group">
        <label for="project-logo">Project Logo</label>
        <input type="file" id="project-logo" @change="handleLogoChange">
      </div>
      <div class="form-group">
        <label for="project-color">Project Color Hex Code</label>
        <input type="color" id="project-color" v-model="project.colorHexCode">
      </div>
      <div class="form-group">
        <label for="project-start-date">Project Start Date</label>
        <input type="date" id="project-start-date" v-model="project.startDate" required>
      </div>
      <div class="form-group">
        <label for="project-completion-date">Project Completion Date</label>
        <input type="date" id="project-completion-date" v-model="project.completionDate" required>
      </div>
      <div class="form-group">
        <label for="project-status">Project Status</label>
        <select id="project-status" v-model="project.status">
          <option value="Open">Open</option>
          <option value="Close">Close</option>
          <option value="Archive">Archive</option>
          <option value="On Hold">On Hold</option>
        </select>
      </div>
      <div class="form-group">
        <label for="project-boq">Project BOQ File Attachments</label>
        <input type="file" id="project-boq" multiple @change="handleBOQChange">
      </div>
      <div class="form-group">
        <label for="project-tags">Project Text Tags</label>
        <!-- Tags input component can be a custom Vue component that handles tag creation -->
      </div>
      <div class="form-group">
        <label>Project Members</label>
        <!-- Members component can be a custom Vue component that handles member addition and role assignment -->
      </div>
      <button type="submit" class="btn btn-primary">Update Project</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProjectEditForm',
  data() {
    return {
      project: {
        name: '',
        category: '',
        logo: null,
        colorHexCode: '#ffffff',
        startDate: '',
        completionDate: '',
        status: 'Open',
        boqFiles: [],
        tags: [],
        members: []
      }
    };
  },
  methods: {
    submitForm() {
      // Logic to submit the updated project details
      // This would typically involve calling an API endpoint
    },
    handleLogoChange(event) {
      // Logic to handle logo file selection
      this.project.logo = event.target.files[0];
    },
    handleBOQChange(event) {
      // Logic to handle BOQ file selections
      this.project.boqFiles = Array.from(event.target.files);
    }
  }
};
</script>

<style scoped>
.project-edit-form {
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

.form-group input[type="text"],
.form-group input[type="date"],
.form-group input[type="color"],
.form-group select,
.form-group input[type="file"] {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>