
<template>
    <span class="timestamp" v-text="timestampPropNieto" />
  </template>
  
  <script setup>
  // Metodo de props en VUE se llama defineProps()
  // NO se importa
  // Es autoImportado
  defineProps({
    timestampPropNieto: {
      
      type: String,
      // una llave que usaremos de defacto/default/por-defecto
      default: "A random date",
    },
  });
  </script>