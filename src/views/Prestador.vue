<template>
  <div>
    
    <AuthOrApp/>

    <li v-for="servico in listOcupacoes" :key="servico._id" class="listaOcupacoes">
      <md-checkbox v-model="listChecked" :value="servico._id" >{{servico.ocupacao}}</md-checkbox>
    </li>

    {{ descricaoServico }}
    
    <md-button @click="gravarOcupacao">
      <span>Gravar</span>
    </md-button>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import AuthOrApp from '../components/AuthOrApp'

export default {
    components: {
        AuthOrApp
    },
  data: () => ({
    listOcupacoes: [],
    listCadastrados: [],
    listChecked:[],
    descricaoServico:'',
    teste: false
  }),

  methods: {
    async buscarOcupacoes() {
      try {
        let response = await this.$http.get("/ocupacao");

        this.listOcupacoes = response.data;

      } catch (error) {
        console.log(error);
      }
    },
    async buscarCadastrados(){
        try {
            
            const url = `/servicoUsuario/${this.usuario._id}`
            
            let response = await this.$http.get(url)

            console.log('buscar', response)

            this.listChecked = response.data.ocupacao

            this.descricaoServico = response.data.descricao


        } catch (error) {
            console.log('aqui')
        }
    },
    async gravarOcupacao(){
        console.log(this.listOcupacoes)
        try {
            
            let payload = {
                idUsuario : this.usuario._id,
                ocupacao: this.listChecked
            }

            let response = await this.$http.post('/servicoUsuario', payload)
        } catch (error) {
        
            console.log('para merde')
        }
    }
  },

  computed:{
    ...mapGetters(["usuario"]),
  },

  async mounted() {
    
    await this.buscarOcupacoes();

    await this.buscarCadastrados();
  }

};
</script>

<style scoped>
.listaOcupacoes {
  list-style: none;
}
</style>