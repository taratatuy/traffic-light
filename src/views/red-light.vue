<template>
  <LightsState :red="true" :pulsingRed="pulsing" :timeLeft="this.timeout" />
</template>

<script>
import { mapGetters } from 'vuex';
import LightsState from '@/components/Lights-state.vue';

export default {
  /*
   * Страница с активным красным светом.
   */
  data() {
    return {
      pulsing: false
    };
  },

  components: {
    LightsState
  },

  computed: mapGetters(['timeout']),

  mounted() {
    this.$store.dispatch('startTimer', { time: 10, color: 'red' });
    this.$store.dispatch('setDirection', 'green');
  },

  beforeUpdate() {
    if (this.timeout == 0) {
      this.$router.push({
        name: 'yellow'
      });
    }
    if (this.timeout <= 3) {
      this.pulsing = true;
    }
  },

  beforeUnmount() {
    this.$store.dispatch('stopTimer', { color: 'red' });
  }
};
</script>
