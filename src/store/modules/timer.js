export default {
  /*
   * Таймер, по которому переключаются страницы.
   */

  state: {
    timeout: -1, // -1 при загрузке приложения.
    timeoutID: ''
  },
  mutations: {
    /*
     * Установка времени до смены цвета и сохранение стейта.
     * time - время до конца таймера в секундах.
     * color - Передаем цвет, чтобы при закрытии страницы, а потом открытии на другом
     *         цвете не подгружался таймаут старого цвета.
     */
    setTimer(state, { time, color }) {
      if (state.timeout === -1) {
        state.timeout = +localStorage.getItem('timeout' + color) || time;
      } else {
        state.timeout = time;
        localStorage.setItem('timeout' + color, time);
      }
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
    startTimer({ commit, state }, { time, color }) {
      commit('setTimer', { time, color });

      function update() {
        const newID = setTimeout(() => {
          if (state.timeout > 0) {
            commit('setTimer', { time: state.timeout - 1, color });
            update();
          }
        }, 1000);
        commit('updateTimeoutID', newID);
      }

      update();
    },

    stopTimer({ commit, state }, { color }) {
      clearTimeout(state.timeoutID);

      // Перед переходом обновляем значение для этого цвета в localStorage.
      commit('setTimer', { time: 0, color });
    }
  },
  getters: {
    timeout(state) {
      return state.timeout;
    }
  }
};
