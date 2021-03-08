<template>
  <LightsState :red="true" :timeLeft="this.timeout" />
</template>

<script>
import { mapGetters } from 'vuex';
import LightsState from '@/components/Lights-state.vue';

export default {
  /*
   * Страница с активным красным светом.
   */
  components: {
    LightsState
  },

  computed: mapGetters(['timeout']),

  mounted() {
    this.$store.dispatch('startTimer', 10);
  },

  beforeUpdate() {
    if (this.timeout == 0) {
      this.$router.push({
        name: 'yellow',
        params: { pathToNextState: 'green' }
      });
    }
  },

  beforeUnmount() {
    this.$store.dispatch('stopTimer');
  }
};
</script>
