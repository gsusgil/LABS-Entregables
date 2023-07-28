<template>
    <p class="message">
      {{ messagePropNieto }}
    </p>
  </template>
  
  <script setup>
  
  defineProps({
    messagePropNieto: {
      
      type: String,
      
      default:
        "default message",
    },
  });
  </script>