<template>
  <div
    class="traffic-color"
    :style="{
      '--bg-active-color': activeColor,
      '--bg-light-color': lightColor
    }"
    :class="{
      'traffic-color_active': activeProp,
      'traffic-color_blink': pulsing
    }"
  ></div>
</template>

<script>
export default {
  /*
   * Один цвет светофора.
   * activeColor - цвет когда горит.
   * lightColor - цвет когда не горит.
   * activeProp - горит / не горит.
   * pulsing - мигает / не мигает.
   */
  name: 'TrafficColor',
  props: {
    activeColor: String,
    lightColor: String,
    activeProp: Boolean,
    pulsing: Boolean
  }
};
</script>

<style src="../scss/traffic-color.scss" lang="scss"></style>
