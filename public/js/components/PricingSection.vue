<template>
  <section id="pricing-section" class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <div class="text-center mb-6">
        <h2 class="text-4xl font-bold">Pricing Plans</h2>
        <p class="text-gray-600">Choose the plan that fits your needs</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-2xl font-bold text-center">Free Trial</h3>
            <p class="text-center text-gray-600 mt-4">Try Manage X for 14 days with no commitment.</p>
            <ul class="mt-6 mb-6">
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-2">check_circle</span>
                Full access to all features
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-2">check_circle</span>
                No credit card required
              </li>
            </ul>
            <div class="text-center">
              <router-link to="/signup" class="btn btn-primary">Start Free Trial</router-link>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-2xl font-bold text-center">Monthly Subscription</h3>
            <p class="text-center text-gray-600 mt-4">$20/month</p>
            <ul class="mt-6 mb-6">
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-2">check_circle</span>
                Unlimited projects and tasks
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-2">check_circle</span>
                Priority support
              </li>
              <li class="flex items-center">
                <span class="material-icons text-green-500 mr-2">check_circle</span>
                No setup fees
              </li>
            </ul>
            <div class="text-center">
              <router-link to="/signup" class="btn btn-primary">Subscribe Now</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricingSection'
}
</script>

<style scoped>
.btn-primary {
  background-color: #3490dc;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2779bd;
}
</style>