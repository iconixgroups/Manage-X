<template>
  <div class="project-settings">
    <h2>Project Settings</h2>
    <form @submit.prevent="updateProject">
      <div class="form-group">
        <label for="project-name">Project Name</label>
        <input type="text" id="project-name" v-model="project.name" required>
      </div>
      <div class="form-group">
        <label for="project-category">Project Category</label>
        <select id="project-category" v-model="project.category">
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="project-logo">Project Logo</label>
        <input type="file" id="project-logo" @change="handleLogoChange">
      </div>
      <div class="form-group">
        <label for="project-color">Project Color Hex Code</label>
        <input type="color" id="project-color" v-model="project.color">
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
        <input type="text" id="project-tags" v-model="project.tags" placeholder="Enter tags separated by commas">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Update Project</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProjectSettings',
  data() {
    return {
      project: {
        name: '',
        category: '',
        logo: null,
        color: '#000000',
        startDate: '',
        completionDate: '',
        status: 'Open',
        boqFiles: [],
        tags: ''
      },
      categories: ['Design', 'Development', 'Marketing', 'Sales']
    };
  },
  methods: {
    updateProject() {
      // Logic to update project details
      console.log('Project updated:', this.project);
      // Emit an event to parent component or call an API
      this.$emit('projectUpdated', this.project);
    },
    handleLogoChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.project.logo = files[0];
      }
    },
    handleBOQChange(event) {
      this.project.boqFiles = Array.from(event.target.files);
    }
  }
};
</script>

<style scoped>
.project-settings {
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
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}

.form-group input[type="file"] {
  display: block;
}

.btn {
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>