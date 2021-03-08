<template>
  <header></header>
  <main>
    <section class="router-wrapper">
      <router-view />
    </section>
    <Navbar />
  </main>
  <footer></footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar }
};
</script>

<style src="./scss/base.scss" lang="scss"></style>
