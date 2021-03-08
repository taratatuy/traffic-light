<template>
  <div
    class="traffic-color"
    :style="{
      '--bg-active-color': activeColor,
      '--bg-light-color': lightColor
    }"
    :class="{
      'traffic-color_active': activeProp,
      'traffic-color_blink': blinkingProp
    }"
  ></div>
</template>

<script>
export default {
  name: 'TrafficColor',
  props: {
    activeColor: String,
    lightColor: String,
    activeProp: Boolean,
    blinkingProp: Boolean
  }
};
</script>

<style src="../scss/traffic-color.scss" lang="scss"></style>
