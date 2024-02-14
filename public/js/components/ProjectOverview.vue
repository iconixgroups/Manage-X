<template>
  <div class="project-overview">
    <div class="project-header">
      <h2>{{ project.name }}</h2>
      <button @click="editProject" class="btn btn-primary">Edit Project</button>
    </div>
    <div class="project-details">
      <div class="detail-item">
        <span class="label">Category:</span>
        <span class="value">{{ project.category }}</span>
      </div>
      <div class="detail-item">
        <span class="label">Status:</span>
        <span :class="`status ${project.status.toLowerCase()}`">{{ project.status }}</span>
      </div>
      <div class="detail-item">
        <span class="label">Start Date:</span>
        <span class="value">{{ formatDate(project.startDate) }}</span>
      </div>
      <div class="detail-item">
        <span class="label">Completion Date:</span>
        <span class="value">{{ formatDate(project.completionDate) }}</span>
      </div>
      <div class="detail-item">
        <span class="label">Total Tasks:</span>
        <span class="value">{{ project.taskCount }}</span>
      </div>
    </div>
    <project-status-donut-graph :project="project"></project-status-donut-graph>
    <div class="project-members">
      <h3>Project Members</h3>
      <ul>
        <li v-for="member in project.members" :key="member.id">
          {{ member.name }} ({{ member.role }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { formatDate } from '@/utils/formatters';
import ProjectStatusDonutGraph from './ProjectStatusDonutGraph.vue';

export default {
  components: {
    ProjectStatusDonutGraph
  },
  data() {
    return {
      // Local state can be added here if needed
    };
  },
  computed: {
    ...mapState({
      project: state => state.project.currentProject
    })
  },
  methods: {
    editProject() {
      this.$router.push({ name: 'ProjectEditForm', params: { projectId: this.project.id } });
    },
    formatDate
  }
};
</script>

<style scoped>
.project-overview {
  /* Styles for the project overview component */
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-item {
  display: flex;
  align-items: center;
}

.label {
  font-weight: bold;
}

.value {
  margin-left: 8px;
}

.status {
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
}

.status.open {
  background-color: #34c759; /* Green */
}

.status.close {
  background-color: #ff3b30; /* Red */
}

.status.archive {
  background-color: #5856d6; /* Purple */
}

.status.onhold {
  background-color: #ffcc00; /* Yellow */
}
</style>