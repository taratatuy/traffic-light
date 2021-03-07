<template>
  <Navbar />
  <section class="router-wrapper">
    <router-view />
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar }
};
</script>

<style src="./scss/base.scss" lang="scss"></style>
