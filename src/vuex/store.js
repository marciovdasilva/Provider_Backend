import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        usuario:{},
        mostraResultadoPesquisa:false,
        ocupacaoSelecionada:null,
        listaPesquisaPrestadores:[]
    },

    mutations: {
        setUsuario(state, payload){
            state.usuario = payload
        },
        setMostraResultadoPesquisa(state, payload){
            state.mostraResultadoPesquisa = payload
        },
        setOcupacaoSelecionada(state, payload){
            state.ocupacaoSelecionada = payload
        },
        setListaPesquisaPrestadores(state, payload){
            state.listaPesquisaPrestadores = payload
        }
    },

    getters: {
        usuario: state => state.usuario,
        mostraResultadoPesquisa: state => state.mostraResultadoPesquisa,
        ocupacaoSelecionada: state => state.ocupacaoSelecionada,
        listaPesquisaPrestadores: state => state.listaPesquisaPrestadores
    },
    
    actions: {
        pesquisaPrestadoresPorOcupacao ({ commit }, ocupacaoSelecionada) {

            axios.get(`/prestadores/${ocupacaoSelecionada.id}`).then(response => {
                
                const lista = response.data.map( (item) => ({titulo: item.nome, descricao: item.descricao})  )
                
                commit('setListaPesquisaPrestadores',lista),

                commit('setMostraResultadoPesquisa',true)
            })
        }
    }

})