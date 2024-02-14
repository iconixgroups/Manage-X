<template>
  <div class="activity-log">
    <h2>Activity Log</h2>
    <div class="log-entries">
      <div v-for="log in activityLogs" :key="log.id" class="log-entry">
        <div class="log-date">{{ formatDate(log.timestamp) }}</div>
        <div class="log-message">{{ log.message }}</div>
        <div class="log-details">
          <button @click="showDetails(log)">Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/js/utils/formatters';
import { mapState } from 'vuex';

export default {
  name: 'ActivityLog',
  computed: {
    ...mapState({
      activityLogs: state => state.activityLog.logs
    })
  },
  methods: {
    formatDate,
    showDetails(log) {
      // Placeholder for method to show detailed log information
      alert(`Details for log ID: ${log.id}`);
    }
  }
};
</script>

<style scoped>
.activity-log {
  padding: 20px;
}

.log-entries {
  margin-top: 10px;
}

.log-entry {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

.log-date,
.log-message {
  margin-bottom: 5px;
}

.log-details button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.log-details button:hover {
  background-color: #0056b3;
}
</style>