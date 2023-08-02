<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue"

</script>

<template>
  <div class="app">
    <Navbar />
    <CountriesList />

    <RouterView />
  </div>
</template>