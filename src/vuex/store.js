import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        usuario:{}
    },

    mutations: {
        setUsuario(state, payload){
            state.usuario = payload
        }
    },

    getters: {
        usuario: state => state.usuario
    },    

})