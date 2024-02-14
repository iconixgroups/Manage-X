<template>
  <div class="sign-up-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="user.confirmPassword" required>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    async registerUser() {
      if (this.user.password !== this.user.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      try {
        const response = await this.$store.dispatch('auth/registerUser', this.user);
        if (response.data.USER_REGISTERED) {
          this.$router.push('/verify-email');
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
  }
};
</script>

<style scoped>
.sign-up-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-primary {
  background-color: #3490dc;
  border-color: #3490dc;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2779bd;
}
</style>