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
  </div>
</template>

<script>
import TrafficColor from '@/components/Traffic-color.vue';

export default {
  name: 'LightsState',

  props: {
    red: String,
    yellow: String,
    green: String
  },

  components: {
    TrafficColor
  }
};
</script>
