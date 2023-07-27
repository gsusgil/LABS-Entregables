<template>
  <br />
  <div>
    <span>{{ FirtsPrhase }}</span>
  </div>

  <div>
    <p>{{ suma }}</p>
  </div>

<div>
  <h1> {{ fullName }} </h1>
</div>

<div class="ex-three">
    <p v-if="showElement">De esta manera aprendo el framework vue.js</p>
    <p v-else></p>
  </div>
<hr>
<h2>Bebidas ex4</h2>
  <div v-for="(bebidas, index) in drinks" :key="index" >
    <br>
    <h3> {{ bebidas.title }} </h3>
    <span> {{ bebidas.description}} </span>
    <p> {{ bebidas.content}} </p>
  </div>

  <!-- <div>
    <button @click="changeColor">Color</button>
    <div :class="bgColor"></div>
  </div> -->

</template>

<script setup>
import { ref, reactive, computed} from "vue";




let FirtsPrhase = ref("Hola mundo este es mi primer trabajo");
//--------------2
let suma = ref (2 + 2);
//--------------2.1
const firtsName = ref('Jesus')
const lastName = ref('Gil')

const fullName = computed({
  get() {
    return firtsName.value + ' ' +lastName.value
  },

})
//-------------3
const showElement = ref(true)

//-------------4

const drinks = reactive([
  { title: 'Papelon con limon', description: 'Bebida refrescante', content: 'derivado del jugo de la caña de azúcar, con limon.' },
  { title: 'Mojito', description: 'Bebida Alcoholica', content: 'El mojito​es un cóctel popular originario de Cuba, compuesto de ron, limón, azúcar.' },
  { title: 'Horchata', description: 'Bebida Tradicional', content: 'bebida dulce de aspecto lechoso, muy consumida en España, elaborada a partir de chufa.' }
])

</script>


<style scoped>

.ex-three{
font-size: 24px;
color: blueviolet;
padding: 15px;
}

h2{
margin-top: 15px;
color:blue;
}

h3 {
  color: skyblue;
  font-weight: bold;
}

span{
font-weight: bold;
}


.fondo-azul {
  background-color: blue;
}

.fondo-verde {
  background-color: greenyellow;
}
</style>
