import Vue from 'vue'
const globalValue= {
    install(Vue){
        Vue.prototype.globalValue = {
            user_id:'',
            user_name:''
        };
    }
}
Vue.use(globalValue);