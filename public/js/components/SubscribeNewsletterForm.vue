<template>
  <div class="subscribe-newsletter-form-container">
    <form @submit.prevent="submitNewsletterForm">
      <div class="mb-4">
        <label for="newsletter-email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="newsletter-email"
          placeholder="Enter your email"
          v-model="email"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubscribeNewsletterForm',
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async submitNewsletterForm() {
      try {
        // Placeholder for actual subscription API call
        // Replace with your API endpoint and method
        await this.$axios.post('/api/subscribe', { email: this.email });
        alert('Thank you for subscribing to our newsletter!');
        this.email = '';
      } catch (error) {
        console.error('There was an error subscribing to the newsletter:', error);
        alert('Failed to subscribe to the newsletter. Please try again later.');
      }
    }
  }
};
</script>

<style scoped>
.subscribe-newsletter-form-container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}

.form-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #3490dc;
  border-color: #3490dc;
}
</style>