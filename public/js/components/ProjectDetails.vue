<template>
  <div class="project-details">
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Project Details</h2>
        <button @click="editProject" class="btn btn-primary">
          <i class="material-icons">edit</i> Edit Project
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="project-info">
          <h3 class="text-xl font-semibold mb-2">General Information</h3>
          <p><strong>Name:</strong> {{ project.name }}</p>
          <p><strong>Category:</strong> {{ project.category }}</p>
          <p><strong>Status:</strong> {{ project.status }}</p>
          <p><strong>Start Date:</strong> {{ formatDate(project.startDate) }}</p>
          <p><strong>Completion Date:</strong> {{ formatDate(project.completionDate) }}</p>
        </div>
        <div class="project-members">
          <h3 class="text-xl font-semibold mb-2">Project Members</h3>
          <ul>
            <li v-for="member in project.members" :key="member.id">
              {{ member.name }} - <span class="role">{{ member.role }}</span>
            </li>
          </ul>
          <button @click="inviteMember" class="btn btn-secondary mt-4">
            <i class="material-icons">person_add</i> Invite Member
          </button>
        </div>
      </div>
      <div class="project-description mt-6">
        <h3 class="text-xl font-semibold mb-2">Description</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/js/utils/formatters';

export default {
  name: 'ProjectDetails',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    editProject() {
      this.$emit('edit-project', this.project);
    },
    inviteMember() {
      this.$emit('invite-member', this.project);
    },
    formatDate
  }
};
</script>

<style scoped>
.project-details {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #3490dc;
  color: #fff;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
}

.role {
  font-style: italic;
}

.material-icons {
  font-size: 20px;
  margin-right: 8px;
}
</style>