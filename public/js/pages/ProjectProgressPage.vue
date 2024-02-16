<template>
  <div class="project-progress-page">
    <div v-if="projectProgressData" class="graphs">
      <!-- Placeholder for project progress graphs -->
    </div>
    <div v-if="activityLogs" class="activity-log">
      <!-- Placeholder for activity log -->
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ProjectProgressPage',
  setup() {
    const projectProgressData = ref(null);
    const activityLogs = ref(null);

    const fetchProjectProgressData = async () => {
      try {
        const response = await axios.get('/api/projects/progress/{projectId}');
        projectProgressData.value = response.data;
      } catch (error) {
        console.error('Failed to fetch project progress data:', error);
      }
    };

    const fetchActivityLogs = async () => {
      try {
        const response = await axios.get('/api/projects/{projectId}/activity');
        activityLogs.value = response.data;
      } catch (error) {
        console.error('Failed to fetch activity logs:', error);
      }
    };

    onMounted(() => {
      fetchProjectProgressData();
      fetchActivityLogs();
    });

    return { projectProgressData, activityLogs };
  }
});
</script>

<style scoped>
.project-progress-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.graphs, .activity-log {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
