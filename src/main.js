import * as THREE from 'three';
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import routers from './routers'

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers,
});

new Vue({
    install(Vue) {
        Vue.protoype.$THREE = THREE;
    },
    vuetify,
    router,
    render : h => h(App),
}).$mount('#app')
