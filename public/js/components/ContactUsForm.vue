<template>
  <div class="contact-us-form-container">
    <form @submit.prevent="submitContactForm">
      <div class="mb-4">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" v-model="contactForm.name" class="form-control" placeholder="Your Name" required>
      </div>
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="contactForm.email" class="form-control" placeholder="Your Email" required>
      </div>
      <div class="mb-4">
        <label for="message" class="form-label">Message</label>
        <textarea id="message" v-model="contactForm.message" class="form-control" rows="4" placeholder="Your Message" required></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUsForm',
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitContactForm() {
      try {
        // Replace with actual API endpoint
        await this.$axios.post('/api/contact', this.contactForm);
        this.$emit('formSubmitted');
        this.resetForm();
      } catch (error) {
        console.error('Error submitting contact form:', error);
        this.$emit('formSubmissionError', error);
      }
    },
    resetForm() {
      this.contactForm.name = '';
      this.contactForm.email = '';
      this.contactForm.message = '';
    }
  }
};
</script>

<style scoped>
.contact-us-form-container {
  max-width: 600px;
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

.btn-primary:hover {
  background-color: #2779bd;
  border-color: #2779bd;
}
</style>