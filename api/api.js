import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.use(ElementUI);

import axios from'axios'
Vue.prototype.$axios=axios;
Vue.prototype.$loginUrl="http://192.168.144.1:8000/api/User/web_login";
Vue.prototype.$infoUrl="http://192.168.144.1:8000/api/User/web_info";
Vue.prototype.$predictUrl="http://192.168.144.1:8000/api/Adv/predict_info";