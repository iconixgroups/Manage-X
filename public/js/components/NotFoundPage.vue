<template>
  <div class="not-found-page">
    <div class="container mx-auto text-center py-20">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <p class="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/" class="btn btn-primary">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found-page {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>