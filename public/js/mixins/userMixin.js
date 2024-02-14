import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      // Data properties for user-related operations
    };
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      isAuthenticated: 'auth/isAuthenticated'
    }),
  },
  methods: {
    ...mapActions('user', [
      'registerUser',
      'updateUserProfile'
    ]),
    ...mapActions('auth', [
      'loginUser'
    ]),
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US');
    },
    async handleRegistration(formData) {
      if (this.validateEmail(formData.email)) {
        try {
          await this.registerUser(formData);
          this.$router.push('/workspace-create');
        } catch (error) {
          console.error('Registration failed:', error);
        }
      } else {
        console.error('Invalid email address');
      }
    },
    async handleLogin(credentials) {
      try {
        await this.loginUser(credentials);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    async handleProfileUpdate(profileData) {
      try {
        await this.updateUserProfile(profileData);
        this.$router.push('/profile-settings');
      } catch (error) {
        console.error('Profile update failed:', error);
      }
    }
  }
};