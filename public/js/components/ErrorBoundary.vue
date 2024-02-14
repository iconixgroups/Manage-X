<template>
  <div>
    <slot v-if="!error" />
    <div v-else>
      <h2>An error has occurred</h2>
      <p>{{ errorMessage }}</p>
      <button @click="retry">Try Again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  data() {
    return {
      error: false,
      errorMessage: ''
    };
  },
  errorCaptured(err, vm, info) {
    this.error = true;
    this.errorMessage = err.toString();
    console.error(err, info);
    return false;
  },
  methods: {
    retry() {
      this.error = false;
      this.$emit('retry');
    }
  }
};
</script>

<style scoped>
/* Add scoped styles for ErrorBoundary component here */
</style>