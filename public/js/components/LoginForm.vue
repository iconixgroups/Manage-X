<template>
  <div class="login-form-container">
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <label for="email" class="form-label">Email address</label>
        <input type="email" id="email" v-model="loginDetails.email" class="form-control" required>
      </div>
      <div class="mb-4">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" v-model="loginDetails.password" class="form-control" required>
      </div>
      <div class="mb-4 form-check">
        <input type="checkbox" id="remember" v-model="loginDetails.remember" class="form-check-input">
        <label for="remember" class="form-check-label">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginDetails: {
        email: '',
        password: '',
        remember: false
      }
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await this.$store.dispatch('auth/loginUser', this.loginDetails);
        if (response.data.success) {
          this.$router.push({ name: 'WorkspaceOverview' });
        } else {
          // Handle login failure
          console.error('Login failed:', response.data.message);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    }
  }
};
</script>

<style scoped>
.login-form-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>