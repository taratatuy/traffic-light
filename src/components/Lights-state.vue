<template>
  <div>
    <TrafficColor
      lightColor="hsl(359deg 94% 92%)"
      activeColor="hsl(359deg 94% 62%)"
      :activeProp="!!red"
    />
    <TrafficColor
      lightColor="hsl(42deg 93% 94%)"
      activeColor="hsl(42deg 93% 64%)"
      :activeProp="!!yellow"
    />
    <TrafficColor
      lightColor="hsl(162deg 43% 76%)"
      activeColor="hsl(162deg 43% 46%)"
      :activeProp="!!green"
    />
    <div
      class="time-container"
      :class="{
        'time-container_red': !!red,
        'time-container_yellow': !!yellow,
        'time-container_green': !!green
      }"
    >
      <span>{{ this.timeLeft }}</span>
    </div>
  </div>
</template>

<script>
import TrafficColor from '@/components/Traffic-color.vue';

export default {
  name: 'LightsState',

  props: {
    red: Boolean,
    yellow: Boolean,
    green: Boolean,
    timeLeft: Number
  },

  components: {
    TrafficColor
  }
};
</script>

<style src="../scss/time-container.scss" lang="scss"></style>
