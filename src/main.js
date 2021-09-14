import * as THREE from 'three';
import Vue from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
    install(Vue) {
        Vue.protoype.$THREE = THREE;
    },
    vuetify,
    render : h => h(App)
}).$mount('#app')
