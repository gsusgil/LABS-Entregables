// main.js

import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAward, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAward, faTrophy);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
