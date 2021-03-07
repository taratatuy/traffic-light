<template>
  <div
    class="traffic-color"
    :style="{
      '--bg-active-color': activeColor,
      '--bg-light-color': lightColor
    }"
    :class="{
      'traffic-color_active': isActive,
      'traffic-color_blink': isBlinking
    }"
    @click="test"
  ></div>
</template>

<script>
export default {
  name: 'TrafficColor',
  data() {
    return {
      isActive: this.activeProp,
      isBlinking: this.blinkingProp
    };
  },
  props: {
    activeColor: String,
    lightColor: String,
    activeProp: Boolean,
    blinkingProp: Boolean
  },
  computed: {},
  methods: {
    test() {
      this.isBlinking = !this.isBlinking;
    }
  }
};
</script>

<style src="../scss/traffic-color.scss" lang="scss"></style>
