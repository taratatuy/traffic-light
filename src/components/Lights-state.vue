<template>
  <div>
    <TrafficColor
      lightColor="hsl(359deg 94% 92%)"
      activeColor="hsl(359deg 94% 62%)"
      :activeProp="red"
      :pulsing="pulsingRed"
    />
    <TrafficColor
      lightColor="hsl(42deg 93% 94%)"
      activeColor="hsl(42deg 93% 64%)"
      :activeProp="yellow"
      :pulsing="pulsingYellow"
    />
    <TrafficColor
      lightColor="hsl(162deg 43% 76%)"
      activeColor="hsl(162deg 43% 46%)"
      :activeProp="green"
      :pulsing="pulsingGreen"
    />
    <div
      class="time-container"
      :class="{
        'time-container_red': red,
        'time-container_yellow': yellow,
        'time-container_green': green
      }"
    >
      <span>{{ this.timeLeft }}</span>
    </div>
  </div>
</template>

<script>
import TrafficColor from '@/components/Traffic-color.vue';

export default {
  /*
   * Связка трех цветов светофора, где один цвет горит.
   */
  name: 'LightsState',

  props: {
    red: Boolean,
    yellow: Boolean,
    green: Boolean,
    pulsingRed: Boolean,
    pulsingYellow: Boolean,
    pulsingGreen: Boolean,
    timeLeft: Number
  },

  components: {
    TrafficColor
  }
};
</script>

<style src="../scss/time-container.scss" lang="scss"></style>
