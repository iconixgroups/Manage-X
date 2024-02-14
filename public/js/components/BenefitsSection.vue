<template>
  <section id="benefits-section" class="py-5 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-6">Benefits of Manage X</h2>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <div class="mb-4">
              <img src="images/benefit-icon-1.png" alt="Benefit 1" class="mx-auto">
            </div>
            <h3 class="text-xl font-semibold mb-3">Streamlined Project Management</h3>
            <p class="text-gray-600">Manage all your projects in one place with ease, from start to finish.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <div class="mb-4">
              <img src="images/benefit-icon-2.png" alt="Benefit 2" class="mx-auto">
            </div>
            <h3 class="text-xl font-semibold mb-3">Collaboration Made Simple</h3>
            <p class="text-gray-600">Invite team members, assign roles, and work together in real-time.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
          <div class="p-6 bg-white rounded-lg shadow-md">
            <div class="mb-4">
              <img src="images/benefit-icon-3.png" alt="Benefit 3" class="mx-auto">
            </div>
            <h3 class="text-xl font-semibold mb-3">Data-Driven Insights</h3>
            <p class="text-gray-600">Make informed decisions with comprehensive reporting and analytics.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitsSection'
}
</script>

<style scoped>
#benefits-section h2 {
  color: #2d3748; /* Tailwind's gray-800 */
}

#benefits-section p {
  color: #718096; /* Tailwind's gray-600 */
}
</style>