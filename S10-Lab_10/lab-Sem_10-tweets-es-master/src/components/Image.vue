<template>
    <img v-bind:src="imageSrcNieto" class="profile" :alt="imageAltNieto" />
  </template>
  
  <script setup>
  
  defineProps({
    imageSrcNieto: {
      type: String,
      default:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTo7Ip1_kUvkTHPE7QSLlCr_-hYsl8ts_HQ997mQ14iiD3mbds6IZCz_kC_f2VAxM4bsgvbaegk70M3hXQ",
    },
    imageAltNieto: {
      type: String,
      default: "A cool image about a dog who uses twitter",
    },
  });
  </script>