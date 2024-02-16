<template>
  <div class="sign-up-page">
    <shadcn-form @submit.prevent="registerUser">
      <shadcn-form-item>
        <shadcn-input v-model="userEmail" placeholder="Enter your email" type="email" required></shadcn-input>
      </shadcn-form-item>
      <shadcn-form-item>
        <shadcn-button type="primary" htmlType="submit">Sign Up</shadcn-button>
      </shadcn-form-item>
    </shadcn-form>
  </div>
</template>

<script>
import { Form as ShadcnForm, FormItem as ShadcnFormItem, Input as ShadcnInput, Button as ShadcnButton } from 'shadcn-ui';
import apiClient from '../plugins/axios';

export default {
  name: 'SignUpPage',
  components: {
    ShadcnForm,
    ShadcnFormItem,
    ShadcnInput,
    ShadcnButton
  },
  data() {
    return {
      userEmail: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        await apiClient.registerUser({ email: this.userEmail });
        this.$router.push('/email-verification');
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  }
}
</script>

<style scoped>
.sign-up-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
