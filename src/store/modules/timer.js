export default {
  /*
   * Таймер, по которому переключаются страницы.
   */

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
    /*
     * Начинаем новый отсчет по секунде.
     * time - время до конца таймера в секундах.
     */
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
