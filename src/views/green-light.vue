<template>
  <LightsState green="GREEN" />
</template>

<script>
import LightsState from '@/components/Lights-state.vue';

export default {
  data() {
    return {
      timeout: 15
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
      this.$router.push({
        name: 'yellow',
        params: { pathToNextState: 'red' }
      });
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
