<template>
    <div>
      <div class="d-flex justify-content-center">
        <img
          :src="`https://flagcdn.com/w320/${infoPais.alpha2Code.toLowerCase()}.png`"
          alt=""
          class="mb-4"
        />
      </div>
      <h2>{{ infoPais.name.common }}</h2>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item d-flex justify-content-between align-items-center mb-4"
        >
          <p class="fw-bold">Capital</p>
          <p>{{ infoPais.capital[0] }}</p>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center mb-4"
        >
          <p class="fw-bold">Area</p>
          <p>{{ infoPais.area }}km<sup>2</sup></p>
        </li>
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <p class="fw-bold">Borders:</p>
          <p v-if="infoPais.borders.length === 0">
            Disculpa, este pais es una isla.
          </p>
          <RouterLink
            v-else
            v-for="(frontera, index) in infoPais.borders"
            :key="index"
            :to="`/list/${frontera}`"
          >
            {{ frontera }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  
  let infoPais = ref(null);
  
  
  let route = useRoute();
  
  
  let recibirAlphaTresCode = async () => {
    let codigoAlphaTres = route.params.alpha3Code;
    

    let respuesta = await fetch(
      `https://ih-countries-api.herokuapp.com/countries/${codigoAlphaTres}`
    );
    console.log(respuesta);
    
    let respuestaLimpia = await respuesta.json();
    // console.log(respuestaLimpia);
  

    infoPais.value = respuestaLimpia;
  
    return { infoPais };
  };
  recibirAlphaTresCode();
  
  onMounted(() => recibirAlphaTresCode());
  
  
  let codigoPais = computed(() => route.params.alpha3Code);
  console.log(codigoPais);
  
 
  watch(codigoPais, () => {
    //console.log(nuevoCodigoAlpha3);
    recibirAlphaTresCode();
  });
  </script>
  