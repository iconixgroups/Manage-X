<template>
  <div class="notifications-page">
    <shadcn-notification v-for="notification in notifications" :key="notification.id" :title="notification.title" :message="notification.message" />
  </div>
</template>

<script>
import { Notification as ShadcnNotification } from 'shadcn-ui';
import { io } from 'socket.io-client';

export default {
  name: 'NotificationsPage',
  components: {
    ShadcnNotification
  },
  data() {
    return {
      notifications: [],
      socket: null
    };
  },
  created() {
    this.socket = io('http://localhost:3000');
    this.socket.on('notification', this.handleNotification);
  },
  methods: {
    handleNotification(notification) {
      this.notifications.push(notification);
    }
  },
  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
</script>

<style scoped>
.notifications-page {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
