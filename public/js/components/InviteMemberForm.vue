<template>
  <div class="invite-member-form">
    <h2>Invite a Member</h2>
    <form @submit.prevent="submitInvite">
      <div class="form-group">
        <label for="memberEmail">Member Email</label>
        <input type="email" id="memberEmail" v-model="memberEmail" class="form-control" placeholder="Enter member's email" required>
      </div>
      <div class="form-group">
        <label for="accessRole">Access Role</label>
        <select id="accessRole" v-model="accessRole" class="form-control" required>
          <option value="Project Admin">Project Admin</option>
          <option value="Standard">Standard</option>
          <option value="Only View">Only View</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Send Invitation</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InviteMemberForm',
  data() {
    return {
      memberEmail: '',
      accessRole: 'Standard'
    };
  },
  methods: {
    async submitInvite() {
      try {
        // Replace with actual invite member API endpoint
        await this.$axios.post('/api/invite-member', {
          email: this.memberEmail,
          role: this.accessRole
        });
        this.$emit('member-invited', {
          email: this.memberEmail,
          role: this.accessRole
        });
        this.memberEmail = '';
        this.accessRole = 'Standard';
        alert('Invitation sent successfully.');
      } catch (error) {
        console.error('Error sending invitation:', error);
        alert('Failed to send invitation.');
      }
    }
  }
};
</script>

<style scoped>
.invite-member-form {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.invite-member-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.invite-member-form .form-group {
  margin-bottom: 15px;
}

.invite-member-form .form-group label {
  display: block;
  margin-bottom: 5px;
}

.invite-member-form .form-group input,
.invite-member-form .form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.invite-member-form .btn-primary {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
}
</style>