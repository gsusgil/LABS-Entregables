<template>
    <div>
      <h1 class="text-center">Countries List</h1>
      <div class="container" v-if="countries">
        <div class="row">
          <!-- lado izq -->
          <div class="col-sm-4">
            <ul class="list-group py-4">

              <!-- path: "/list/:alpha3Code", -->
              
              <router-link
                :to="`/list/${country.alpha3Code}`"
                v-for="country in countries"
                :key="country.alpha3Code"
              >
                <div class="">
                  <li
                    class="list-group-item d-flex flex-column justify-content-center align-items-center"
                  >
                    <img
                      :src="getFlagImageUrl(country.alpha2Code)"
                      alt=""
                      class="mb-2 country-flag"
                    />
                    <p>{{ country.name.common }}</p>
                  </li>
                </div>
              </router-link>
            </ul>
          </div>

          <!-- lado derecho -->

          <div class="col-sm-8">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  

  const countries = ref(null);
  
  
  const getFlagImageUrl = (alpha2Code) => {
    return `https://flagcdn.com/72x54/${alpha2Code?.toLowerCase()}.png`;
  };
  
  
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const data = await response.json();
      // Ordenamos los países por su nombre común
      countries.value = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } catch (error) {
      console.error("Error al obtener los países:", error);
    }
  };
  
  
  onMounted(() => {
    fetchCountries();
  });
  </script>
  
  <style scoped>
  .country-flag {
    width: 120px;
  }
  </style>
  