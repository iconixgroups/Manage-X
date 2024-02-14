import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      // Data properties for activity log if needed
    };
  },
  computed: {
    ...mapGetters({
      activityLogs: 'activityLog/getActivityLogs',
    }),
  },
  methods: {
    ...mapActions({
      fetchActivityLogs: 'activityLog/fetchActivityLogs',
      logUserActivity: 'activityLog/logUserActivity',
    }),
    async logActivity(action, details) {
      try {
        const activityData = {
          action,
          details,
          timestamp: new Date(),
        };
        await this.logUserActivity(activityData);
      } catch (error) {
        console.error('Error logging activity:', error);
      }
    },
  },
  created() {
    this.fetchActivityLogs();
  },
};