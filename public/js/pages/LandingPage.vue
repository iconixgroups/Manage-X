<template>
  <div class="landing-page">
    <shadcn-button @click="navigateToFreeTrial" type="primary">Free Trial</shadcn-button>
    <shadcn-button @click="navigateToPaidSubscription" type="success">Paid Subscription</shadcn-button>
  </div>
</template>

<script>
import { Button as ShadcnButton } from 'shadcn-ui';

export default {
  name: 'LandingPage',
  components: {
    ShadcnButton
  },
  methods: {
    navigateToFreeTrial() {
      this.$router.push('/signup');
    },
    navigateToPaidSubscription() {
      this.$router.push('/payment');
    }
  }
}
</script>

<style scoped>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}
</style>
