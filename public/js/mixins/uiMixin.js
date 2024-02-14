import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      // UI state variables can be added here
    };
  },
  computed: {
    ...mapState({
      isMenuCollapsed: state => state.ui.isMenuCollapsed
    })
  },
  methods: {
    ...mapActions('ui', ['toggleMenu', 'setMenuState']),
    toggleSideMenu() {
      this.toggleMenu();
    },
    closeSideMenu() {
      this.setMenuState(false);
    },
    openSideMenu() {
      this.setMenuState(true);
    }
  }
};