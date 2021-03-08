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
      pathToNextState: this.$route.params.pathToNextState || '/green',
      pulsing: false
    };
  },

  components: {
    LightsState
  },

  computed: mapGetters(['timeout']),

  mounted() {
    this.$store.dispatch('startTimer', 3);
  },

  beforeUpdate() {
    if (this.timeout == 0) {
      this.$router.push(this.pathToNextState);
    }
    if (this.timeout <= 3) {
      this.pulsing = true;
    }
  },

  beforeUnmount() {
    this.$store.dispatch('stopTimer');
  }
};
</script>
