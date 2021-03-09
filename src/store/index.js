import { createStore } from 'vuex';
import timer from './modules/timer.js';
import direction from './modules/direction.js';

export default createStore({
  modules: {
    timer,
    direction
  }
});
