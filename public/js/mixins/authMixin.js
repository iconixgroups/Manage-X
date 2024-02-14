import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('auth', [
      'registerUser',
      'loginUser',
      'updateUserProfile'
    ]),
    async handleSignUp(formData) {
      try {
        const response = await this.registerUser(formData);
        if (response.data.status === 'success') {
          this.$router.push({ name: 'WorkspaceCreation' });
        } else {
          throw new Error('Signup failed');
        }
      } catch (error) {
        console.error('Error during sign up:', error.message);
      }
    },
    async handleLogin(credentials) {
      try {
        const response = await this.loginUser(credentials);
        if (response.data.status === 'success') {
          this.$router.push({ name: 'Dashboard' });
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error.message);
      }
    },
    async handleEmailVerification(token) {
      try {
        const response = await this.verifyUserEmail(token);
        if (response.data.status === 'success') {
          this.$router.push({ name: 'ProfileSettings' });
        } else {
          throw new Error('Email verification failed');
        }
      } catch (error) {
        console.error('Error during email verification:', error.message);
      }
    },
    async handleProfileUpdate(profileData) {
      try {
        const response = await this.updateUserProfile(profileData);
        if (response.data.status === 'success') {
          this.$router.push({ name: 'WorkspacePage' });
        } else {
          throw new Error('Profile update failed');
        }
      } catch (error) {
        console.error('Error updating profile:', error.message);
      }
    }
  }
};