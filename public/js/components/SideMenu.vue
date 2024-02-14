<template>
  <div :class="{ 'is-collapsed': isMenuCollapsed }" class="side-menu">
    <div class="logo-container">
      <img src="@/images/logo.png" alt="Manage X Logo" class="logo" />
    </div>
    <nav class="menu-navigation">
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/tasks">Tasks</router-link></li>
        <li><router-link to="/activity-log">Activity Log</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
      </ul>
    </nav>
    <div class="profile-settings">
      <router-link to="/user-profile-settings">
        <img src="@/images/default-user.png" alt="User Profile" class="user-profile-icon" />
        Profile Settings
      </router-link>
    </div>
    <button class="collapse-menu-button" @click="toggleMenu">
      <i :class="isMenuCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      isMenuCollapsed: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuCollapsed = !this.isMenuCollapsed;
    }
  }
};
</script>

<style scoped>
.side-menu {
  width: 250px;
  transition: width 0.3s;
}

.is-collapsed {
  width: 50px;
}

.logo-container {
  text-align: center;
  padding: 20px;
}

.logo {
  max-width: 100%;
  height: auto;
}

.menu-navigation ul {
  list-style: none;
  padding: 0;
}

.menu-navigation li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}

.menu-navigation li a:hover {
  background-color: #f0f0f0;
}

.profile-settings {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.profile-settings a {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
}

.user-profile-icon {
  margin-right: 10px;
  border-radius: 50%;
}

.collapse-menu-button {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.collapse-menu-button i {
  font-size: 20px;
  color: #333;
}
</style>