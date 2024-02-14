<template>
  <div class="workspace-overview">
    <div class="header">
      <h2>Workspace Overview</h2>
      <button @click="createNewWorkspace" class="btn btn-primary">
        Create New Workspace
      </button>
    </div>
    <div class="workspace-list">
      <div v-for="workspace in workspaces" :key="workspace.id" class="workspace-item">
        <div class="workspace-info">
          <div class="workspace-icon">
            <img :src="workspace.logo || defaultWorkspaceIcon" alt="Workspace Logo">
          </div>
          <div class="workspace-details">
            <h3>{{ workspace.name }}</h3>
            <p>{{ workspace.description }}</p>
          </div>
        </div>
        <div class="workspace-actions">
          <router-link :to="{ name: 'ProjectDetails', params: { workspaceId: workspace.id } }">
            View Projects
          </router-link>
          <button @click="editWorkspace(workspace.id)" class="btn btn-secondary">
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import defaultWorkspaceIcon from '@/images/default-workspace-icon.png';

export default {
  name: 'WorkspaceOverview',
  data() {
    return {
      defaultWorkspaceIcon
    };
  },
  computed: {
    ...mapState({
      workspaces: state => state.workspace.workspaces
    })
  },
  methods: {
    ...mapActions('workspace', ['fetchWorkspaces', 'createWorkspace']),
    createNewWorkspace() {
      this.createWorkspace().then(workspaceId => {
        this.$router.push({ name: 'WorkspaceDetails', params: { workspaceId } });
      });
    },
    editWorkspace(workspaceId) {
      this.$router.push({ name: 'WorkspaceEdit', params: { workspaceId } });
    }
  },
  created() {
    this.fetchWorkspaces();
  }
};
</script>

<style scoped>
.workspace-overview {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.workspace-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.workspace-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: calc(33.333% - 20px);
}

.workspace-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.workspace-icon img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.workspace-details h3 {
  margin: 0;
  font-size: 1.2em;
}

.workspace-actions {
  display: flex;
  justify-content: space-between;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>