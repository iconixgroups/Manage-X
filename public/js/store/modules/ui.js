const state = {
  isSideMenuOpen: false,
  isModalOpen: false,
  currentModal: null,
};

const getters = {
  isSideMenuOpen: state => state.isSideMenuOpen,
  isModalOpen: state => state.isModalOpen,
  currentModal: state => state.currentModal,
};

const actions = {
  toggleSideMenu({ commit }) {
    commit('TOGGLE_SIDE_MENU');
  },
  openModal({ commit }, modalName) {
    commit('SET_MODAL_OPEN', true);
    commit('SET_CURRENT_MODAL', modalName);
  },
  closeModal({ commit }) {
    commit('SET_MODAL_OPEN', false);
    commit('SET_CURRENT_MODAL', null);
  },
};

const mutations = {
  TOGGLE_SIDE_MENU(state) {
    state.isSideMenuOpen = !state.isSideMenuOpen;
  },
  SET_MODAL_OPEN(state, isOpen) {
    state.isModalOpen = isOpen;
  },
  SET_CURRENT_MODAL(state, modalName) {
    state.currentModal = modalName;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};