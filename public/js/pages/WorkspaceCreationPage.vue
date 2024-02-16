<template>
  <div class="workspace-creation-page">
    <shadcn-form @submit.prevent="createWorkspace">
      <shadcn-form-item label="Workspace Name">
        <shadcn-input v-model="workspaceData.name" placeholder="Enter workspace name"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item label="Logo">
        <shadcn-input type="file" @change="handleFileUpload"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item label="Color Code">
        <shadcn-input v-model="workspaceData.colorCode" placeholder="Enter color code"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item>
        <shadcn-button type="primary" htmlType="submit">Create Workspace</shadcn-button>
      </shadcn-form-item>
    </shadcn-form>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from 'shadcn-ui';
import apiClient from '../plugins/axios';

export default {
  name: 'WorkspaceCreationPage',
  components: {
    ShadcnForm: Form,
    ShadcnFormItem: FormItem,
    ShadcnInput: Input,
    ShadcnButton: Button
  },
  data() {
    return {
      workspaceData: {
        name: '',
        logo: null,
        colorCode: ''
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      this.workspaceData.logo = event.target.files[0];
    },
    async createWorkspace() {
      const formData = new FormData();
      formData.append('name', this.workspaceData.name);
      formData.append('logo', this.workspaceData.logo);
      formData.append('colorCode', this.workspaceData.colorCode);

      try {
        await apiClient.createWorkspace(formData);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  }
}
</script>

<style scoped>
.workspace-creation-page {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
