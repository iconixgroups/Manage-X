<template>
  <div class="project-creation-page">
    <shadcn-form @submit.prevent="createProject">
      <shadcn-form-item label="Project Name">
        <shadcn-input v-model="projectData.name" placeholder="Enter project name"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item label="Logo">
        <shadcn-input type="file" @change="handleFileUpload"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item label="Category">
        <shadcn-select v-model="projectData.category" placeholder="Select a category">
          <shadcn-option value="Design">Design</shadcn-option>
          <shadcn-option value="Development">Development</shadcn-option>
          <shadcn-option value="Marketing">Marketing</shadcn-option>
        </shadcn-select>
      </shadcn-form-item>
      <shadcn-form-item label="Start Date">
        <shadcn-date-picker v-model="projectData.startDate" placeholder="Select start date"></shadcn-date-picker>
      </shadcn-form-item>
      <shadcn-form-item label="End Date">
        <shadcn-date-picker v-model="projectData.endDate" placeholder="Select end date"></shadcn-date-picker>
      </shadcn-form-item>
      <shadcn-form-item>
        <shadcn-button type="primary" htmlType="submit">Create Project</shadcn-button>
      </shadcn-form-item>
    </shadcn-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Select, Option, DatePicker, Button } from 'shadcn-ui';
import apiClient from '../plugins/axios';

export default {
  name: 'ProjectCreationPage',
  components: {
    ShadcnForm: Form,
    ShadcnFormItem: FormItem,
    ShadcnInput: Input,
    ShadcnSelect: Select,
    ShadcnOption: Option,
    ShadcnDatePicker: DatePicker,
    ShadcnButton: Button
  },
  data() {
    return {
      projectData: {
        name: '',
        logo: null,
        category: '',
        startDate: '',
        endDate: ''
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      this.projectData.logo = event.target.files[0];
    },
    async createProject() {
      const formData = new FormData();
      formData.append('name', this.projectData.name);
      formData.append('logo', this.projectData.logo);
      formData.append('category', this.projectData.category);
      formData.append('startDate', this.projectData.startDate);
      formData.append('endDate', this.projectData.endDate);

      try {
        await apiClient.addProject(formData);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  }
};
</script>

<style scoped>
.project-creation-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
