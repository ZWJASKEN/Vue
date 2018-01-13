import Vue from 'vue';
import App from './component/App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(ElementUI);

import routerConfig from './component/router/index.js';

import axios from 'axios';

axios.defaults.baseURL = 'http://157.122.54.189:9095';

Vue.prototype.$http = axios;

import api from './js/api-config.js';

Vue.prototype.$api = api;

new Vue({
    el:'#app',
    render:(createElement=>createElement(App)),
    router: new VueRouter(routerConfig)
});