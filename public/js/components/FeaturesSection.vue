<template>
  <section id="features-section" class="bg-gray-100 py-8">
    <div class="container mx-auto px-2">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-semibold">Features</h2>
        <p class="text-gray-600">Explore the wide array of features that Manage X offers to streamline your project management.</p>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow p-4">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto mb-4">
              <i class="material-icons">group_work</i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Collaborative Workspaces</h3>
            <p class="text-gray-600">Create and manage workspaces to collaborate with your team effectively.</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow p-4">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto mb-4">
              <i class="material-icons">assessment</i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Real-time Analytics</h3>
            <p class="text-gray-600">Gain insights with real-time analytics and reporting tools for your projects.</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <div class="bg-white rounded shadow p-4">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto mb-4">
              <i class="material-icons">schedule</i>
            </div>
            <h3 class="text-lg font-semibold mb-2">Task Scheduling</h3>
            <p class="text-gray-600">Schedule tasks efficiently and keep track of deadlines and progress.</p>
          </div>
        </div>
        <!-- More feature blocks can be added here -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>

<style scoped>
#features-section h2 {
  color: #333;
}

#features-section p {
  color: #555;
}

#features-section .bg-blue-500 {
  background-color: #3490dc;
}

#features-section .bg-green-500 {
  background-color: #38c172;
}

#features-section .bg-purple-500 {
  background-color: #6b5b95;
}
</style>