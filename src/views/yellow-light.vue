<template>
  <LightsState
    :yellow="true"
    :pulsingYellow="pulsing"
    :timeLeft="this.timeout"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import LightsState from '@/components/Lights-state.vue';

export default {
  /*
   * Страница с активным желтым светом.
   */
  data() {
    return {
      pulsing: false
    };
  },

  components: {
    LightsState
  },

  computed: mapGetters(['timeout', 'direction']),

  mounted() {
    this.$store.dispatch('startTimer', { time: 3, color: 'yellow' });
  },

  beforeUpdate() {
    if (this.timeout == 0) {
      this.$router.push(this.direction);
    }
    if (this.timeout <= 3) {
      this.pulsing = true;
    }
  },

  beforeUnmount() {
    this.$store.dispatch('stopTimer', { color: 'yellow' });
  }
};
</script>
