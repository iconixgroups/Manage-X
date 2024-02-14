<template>
  <div class="dashboard">
    <div class="graph-section">
      <div class="graph-container">
        <project-status-donut-graph :project="selectedProject"></project-status-donut-graph>
      </div>
      <div class="graph-container">
        <task-progress-donut-graph :project="selectedProject"></task-progress-donut-graph>
      </div>
      <div class="graph-container">
        <task-category-donut-graph :project="selectedProject"></task-category-donut-graph>
      </div>
    </div>
    <div class="trend-section">
      <task-progress-trend-graph :project="selectedProject"></task-progress-trend-graph>
    </div>
    <div class="activity-log-section">
      <activity-log :project="selectedProject"></activity-log>
    </div>
  </div>
</template>

<script>
import ProjectStatusDonutGraph from './ProjectStatusDonutGraph.vue';
import TaskProgressDonutGraph from './TaskProgressDonutGraph.vue';
import TaskCategoryDonutGraph from './TaskCategoryDonutGraph.vue';
import TaskProgressTrendGraph from './TaskProgressTrendGraph.vue';
import ActivityLog from './ActivityLog.vue';

export default {
  components: {
    ProjectStatusDonutGraph,
    TaskProgressDonutGraph,
    TaskCategoryDonutGraph,
    TaskProgressTrendGraph,
    ActivityLog
  },
  data() {
    return {
      selectedProject: null
    };
  },
  created() {
    // Fetch the selected project data here or set it from a global state/store
    this.selectedProject = this.getSelectedProject();
  },
  methods: {
    getSelectedProject() {
      // Placeholder for method to get the selected project
      // This should be replaced with actual logic to retrieve project data
      return {
        // Project data structure
      };
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
}

.graph-section {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.graph-container {
  width: 33%;
}

.trend-section,
.activity-log-section {
  margin: 20px 0;
}
</style>