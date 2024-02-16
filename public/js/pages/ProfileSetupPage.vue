<template>
  <div class="profile-setup-page">
    <shadcn-form @submit.prevent="updateUserProfile">
      <shadcn-form-item label="Name">
        <shadcn-input v-model="profile.name" placeholder="Your name"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item label="Company">
        <shadcn-input v-model="profile.company" placeholder="Your company"></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item>
        <shadcn-button type="primary" htmlType="submit">Update Profile</shadcn-button>
      </shadcn-form-item>
    </shadcn-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Form, FormItem, Input, Button } from 'shadcn-ui';
import apiClient from '../plugins/axios';

export default defineComponent({
  name: 'ProfileSetupPage',
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
        company: ''
      }
    };
  },
  methods: {
    async updateUserProfile() {
      try {
        await apiClient.updateUserProfile(this.profile);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  }
});
</script>

<style scoped>
.profile-setup-page {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
