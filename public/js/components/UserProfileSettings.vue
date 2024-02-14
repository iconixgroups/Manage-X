<template>
  <div class="user-profile-settings">
    <h2>User Profile Settings</h2>
    <form @submit.prevent="updateUserProfile">
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" v-model="userProfile.firstName" required>
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" v-model="userProfile.lastName" required>
      </div>
      <div class="form-group">
        <label for="company-name">Company Name</label>
        <input type="text" id="company-name" v-model="userProfile.companyName">
      </div>
      <div class="form-group">
        <label for="contact-number">Contact Number</label>
        <input type="tel" id="contact-number" v-model="userProfile.contactNumber">
      </div>
      <button type="submit" class="btn btn-primary">Save Profile</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserProfileSettings',
  data() {
    return {
      userProfile: {
        firstName: '',
        lastName: '',
        companyName: '',
        contactNumber: ''
      }
    };
  },
  methods: {
    updateUserProfile() {
      // Placeholder for update profile method
      // This should include API call to update user profile
      console.log('Profile updated:', this.userProfile);
      // Emit an event for parent component to handle or redirect
      this.$emit('profile-updated', this.userProfile);
    }
  }
};
</script>

<style scoped>
.user-profile-settings {
  max-width: 600px;
  margin: auto;
}

.user-profile-settings h2 {
  text-align: center;
  margin-bottom: 20px;
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
  background-color: #007bff;
  border-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>