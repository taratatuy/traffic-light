import { createStore } from 'vuex';
import timer from './modules/timer.js';

export default createStore({
  modules: {
    timer
  }
});
