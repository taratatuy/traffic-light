export default {
  /*
   * Логика выбора цвета после желтого.
   */

  state: {
    directionTo: 'green'
  },
  mutations: {},
  actions: {
    setDirection({ state }, direction) {
      state.directionTo = direction || 'green';
    }
  },
  getters: {
    direction(state) {
      return state.directionTo;
    }
  }
};
