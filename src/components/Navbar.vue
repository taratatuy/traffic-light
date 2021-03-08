<template>
  <nav class="navbar">
    <router-link class="nav-link" to="/red">/red</router-link>
    <router-link class="nav-link" to="/yellow">/yellow</router-link>
    <router-link class="nav-link" to="/green">/green</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style src="../scss/navbar.scss" lang="scss"></style>
