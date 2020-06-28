<template>
  <div>
    
    <md-checkbox v-model="teste" > aaaaaaaa {{ teste }} </md-checkbox>

    <li v-for="servico in listOcupacoes" :key="servico._id" class="listaOcupacoes">
      <md-checkbox v-model="listChecked" :value="servico._id" >{{servico.ocupacao}}</md-checkbox>

      

    </li>
    <md-button @click="gravarOcupacao">
      <span>Gravar</span>
    </md-button>

        

    {{listChecked}}        

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    listOcupacoes: [],
    listCadastrados: [],
    listChecked:[],
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
            console.log("Neh", this.usuario)
            const url = `/servicoUsuario/${this.usuario._id}`
            console.log('URL', url)
            let response = await this.$http.get(url)

            this.listChecked = response.data;
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