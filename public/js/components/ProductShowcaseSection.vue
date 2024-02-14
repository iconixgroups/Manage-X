<template>
  <section id="product-showcase-section" class="bg-white py-8">
    <div class="container mx-auto px-2">
      <div class="text-center mb-8">
        <h2 class="font-semibold text-2xl text-gray-800">Manage X Web App</h2>
        <p class="text-gray-600">Your all-in-one project management solution</p>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="images/manage-x-dashboard.png" alt="Dashboard" class="rounded-lg mb-4">
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Intuitive Dashboard</h3>
            <p class="text-gray-600 text-sm">Get a quick overview of your projects with our easy-to-use dashboard.</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="images/manage-x-collaboration.png" alt="Collaboration" class="rounded-lg mb-4">
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Seamless Collaboration</h3>
            <p class="text-gray-600 text-sm">Collaborate with your team in real-time, wherever you are.</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="images/manage-x-analytics.png" alt="Analytics" class="rounded-lg mb-4">
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Advanced Analytics</h3>
            <p class="text-gray-600 text-sm">Make informed decisions with comprehensive project analytics.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductShowcaseSection'
}
</script>

<style scoped>
#product-showcase-section {
  background-image: url('images/product-showcase-bg.png');
  background-size: cover;
  background-position: center;
}
</style>