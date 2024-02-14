<template>
  <div class="project-member-form">
    <h2>Add Project Member</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="member-email">Member Email:</label>
        <input type="email" id="member-email" v-model="memberEmail" required>
      </div>
      <div class="form-group">
        <label for="member-role">Member Role:</label>
        <select id="member-role" v-model="memberRole" required>
          <option value="Project Admin">Project Admin</option>
          <option value="Standard">Standard</option>
          <option value="Only View">Only View</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Invite Member</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProjectMemberForm',
  data() {
    return {
      memberEmail: '',
      memberRole: ''
    };
  },
  methods: {
    submitForm() {
      this.$emit('invite-member', {
        email: this.memberEmail,
        role: this.memberRole
      });
      this.memberEmail = '';
      this.memberRole = '';
    }
  }
};
</script>

<style scoped>
.project-member-form {
  max-width: 500px;
  margin: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>