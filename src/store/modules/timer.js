export default {
  state: {
    timeout: 0,
    timeoutID: ''
  },
  mutations: {
    setTimer(state, time) {
      state.timeout = time;
    },

    updateTimeoutID(state, newID) {
      state.timeoutID = newID;
    }
  },
  actions: {
    startTimer({ commit, state }, time) {
      commit('setTimer', time);

      function update() {
        const newID = setTimeout(() => {
          if (state.timeout > 0) {
            commit('setTimer', state.timeout - 1);
            update();
          }
        }, 1000);
        commit('updateTimeoutID', newID);
      }

      update();
    },

    stopTimer({ state }) {
      clearTimeout(state.timeoutID);
    }
  },
  getters: {
    timeout(state) {
      return state.timeout;
    }
  }
};
