<template>
  <div class="tweet">
    <Image :imageSrcNieto="imageSrcPadre" :imageAltNieto="imageAltPadre" />
    <div class="body">
      <div class="top">
        <Usser :usserNamePropNieto="usserNamePadre" :usserHandlePropNieto="usserHandlePadre" />
        
        <Timestamp :timestampPropNieto="timestampPadre" />
      </div>

      <Message :messagePropNieto="messagePropPadre" />

      <!-- Incorporar iconos como un componente -->
      <Icons />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import Icons from "./Icons.vue";
import Message from "./Message.vue";
import Usser from "./Usser.vue";
import Timestamp from "./Timestamp.vue";
import Image from "./Image.vue";

defineProps({

usserNamePadre: {
  type: String,
},
usserHandlePadre: {
  type: String,
},

imageSrcPadre: {
  type: String,
},
imageAltPadre: {
  type: String,
},

messagePropPadre: {
  type: String,
},

timestampPadre: {
  type: String,
},
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

