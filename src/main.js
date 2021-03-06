import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB0gDzu4E5toZZi9_hT6MyqfPb6GwAW7Aw',
    libraries: 'places',
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
