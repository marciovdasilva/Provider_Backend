import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//import 'vue-material/dist/theme/default-dark.css'
//import 'vue-material/dist/theme/black-green-light.css'
//import 'vue-material/dist/theme/black-green-dark.css'
import 'material-design-icons/iconfont/material-icons.css'
import VueMoment from 'vue-moment'
import moment from 'moment'

import { ConfigAxios } from './functions/ConfigAxios'

Vue.use(VueMoment,{ moment })
Vue.use(VueMaterial)

Vue.material.locale.dateFormat= 'dd/MM/yyyy'

new ConfigAxios()

Vue.config.productionTip = false

Vue.filter('monetario', function (valor) {

    if (typeof valor !== "number") {
        return valor;
    }
    
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    
    return formatter.format(valor);
})

Vue.filter('situacaoPedido', function (valor) {

    if (typeof valor !== "boolean") {
        return valor;
    }
    
    return valor ? 'Finalizado': 'Aberto'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')