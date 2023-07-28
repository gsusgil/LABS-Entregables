<template>
    <span class="user">
      <span class="name">{{ usserNamePropNieto }}</span>
      <span class="handle">{{ usserHandlePropNieto }}</span>
    </span>
  </template>
  
  <script setup>
  // Metodo de props en VUE se llama defineProps()
  // NO se importa
  // Es autoImportado
  defineProps({
    usserNamePropNieto: {
      // llave que define el tipon de dato que va a recibir este prop
      type: String,
    },
    usserHandlePropNieto: {
      type: String,
    },
  });
  </script>