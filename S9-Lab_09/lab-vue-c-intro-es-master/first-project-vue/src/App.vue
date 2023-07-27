<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import CuerpoHtml from "./components/CuerpoHtml.vue";
</script>

<template>
  <img
    alt="Vue logo"
    class="logo"
    src="./assets/logo.svg"
    width="125"
    height="125"
  />
  <div>
    <NavBar />
  </div>
  <div>
    <CuerpoHtml />
  </div>
  <div>
    <Footer />
    </div>

</template>

<style scoped></style>
