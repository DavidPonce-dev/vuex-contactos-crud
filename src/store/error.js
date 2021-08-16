export default {
  namespaced: true,
  state: {
    errorMsg: "",
    tout: null,
  },
  mutations: {
    setErrorMsg(state, message) {
      state.errorMsg = message;

      clearTimeout(state.tout);
      state.tout = setTimeout(() => {
        state.errorMsg = "";
      }, 3000);
    },
  },
  actions: {
    setErrorMsg({ commit }, message) {
      commit("setErrorMsg", message);
    },
  },
};
