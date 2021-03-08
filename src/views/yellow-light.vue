<template>
  <LightsState :yellow="true" :timeLeft="this.timeout" />
</template>

<script>
import { mapGetters } from 'vuex';
import LightsState from '@/components/Lights-state.vue';

export default {
  data() {
    return {
      pathToNextState: this.$route.params.pathToNextState || '/green'
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
  },

  beforeUnmount() {
    this.$store.dispatch('stopTimer');
  }
};
</script>
