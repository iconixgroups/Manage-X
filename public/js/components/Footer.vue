<template>
  <footer class="bg-gray-100 text-center lg:text-left">
    <div class="text-gray-700 text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © {{ new Date().getFullYear() }} Manage X:
      <a class="text-gray-800" href="https://managex.com/">managex.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  padding: 1rem 0;
  background: #f7f7f7;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>