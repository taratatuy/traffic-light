<template>
  <LightsState :green="true" :timeLeft="this.timeout" />
</template>

<script>
import { mapGetters } from 'vuex';
import LightsState from '@/components/Lights-state.vue';

export default {
  /*
   * Страница с активным зеленым светом.
   */
  components: {
    LightsState
  },

  computed: mapGetters(['timeout']),

  mounted() {
    this.$store.dispatch('startTimer', 15);
  },

  beforeUpdate() {
    if (this.timeout == 0) {
      this.$router.push({
        name: 'yellow',
        params: { pathToNextState: 'red' }
      });
    }
  },

  beforeUnmount() {
    this.$store.dispatch('stopTimer');
  }
};
</script>
