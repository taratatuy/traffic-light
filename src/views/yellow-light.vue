<template>
  <LightsState yellow="YELLOW" />
</template>

<script>
import LightsState from '@/components/Lights-state.vue';

export default {
  data() {
    return {
      pathToNextState: this.$route.params.pathToNextState || '/green',
      timeout: 3
    };
  },

  components: {
    LightsState
  },

  methods: {
    timer() {
      this.timeoutID = setTimeout(() => {
        if (this.timeout > 0) {
          console.log(this.timeout); //TODO: Change to emit.
          this.timeout--;
          this.timer();
        } else {
          this.next();
        }
      }, 1000);
    },

    next() {
      this.$router.push(this.pathToNextState);
    }
  },

  mounted() {
    this.timer();
  },

  beforeUnmount() {
    clearTimeout(this.timeoutID);
  }
};
</script>
