<template>
  <div class="settings-page">
    <shadcn-form @submit.prevent="updateUserProfile">
      <shadcn-form-item label="Name">
        <shadcn-input v-model="profile.name" placeholder="Your name"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item label="Email">
        <shadcn-input v-model="profile.email" placeholder="Your email"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item>
        <shadcn-button type="primary" htmlType="submit">Update Profile</shadcn-button>
      </shadcn-form-item>
    </shadcn-form>
    <!-- Additional forms for workspace and project settings can be added here -->
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from 'shadcn-ui';
import apiClient from '../plugins/axios';

export default {
  name: 'SettingsPage',
  components: {
    ShadcnForm: Form,
    ShadcnFormItem: FormItem,
    ShadcnInput: Input,
    ShadcnButton: Button
  },
  data() {
    return {
      profile: {
        name: '',
        email: ''
      }
      // Additional data properties for workspace and project settings
    };
  },
  methods: {
    async updateUserProfile() {
      try {
        await apiClient.put('/user/profile', this.profile);
        alert('Profile updated successfully');
      } catch (error) {
        alert(error.response.data.message);
      }
    }
    // Additional methods for updating workspace and project settings
  }
};
</script>

<style scoped>
.settings-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
