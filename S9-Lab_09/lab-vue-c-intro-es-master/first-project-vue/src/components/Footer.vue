<template>
<div v-html="Footer">
  
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
let Footer = ref(`
<br>
  <nav class="bar">
      <a href="#">Home</a>
      <a href="#">Page two</a>
      <a href="#">Page Three</a>
      <a href="#">Page four</a>
      <p>Barcelona, Spain 2023. Copyright</p>
    </nav>`)

</script>

<style scoped>
.bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    align-items: flex-end;
}
</style>
