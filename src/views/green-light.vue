<template>
  <LightsState :green="true" :pulsingGreen="pulsing" :timeLeft="this.timeout" />
</template>

<script>
import { mapGetters } from 'vuex';
import LightsState from '@/components/Lights-state.vue';

export default {
  /*
   * Страница с активным зеленым светом.
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
    this.$store.dispatch('startTimer', { time: 15, color: 'green' });
    this.$store.dispatch('setDirection', 'red');
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
    this.$store.dispatch('stopTimer', { color: 'green' });
  }
};
</script>
