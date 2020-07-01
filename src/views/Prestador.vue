<template>
  <div class="full-control listaOcupacao">
    <AuthOrApp />
    <md-list>
      <md-subheader>Serviços</md-subheader>
      <md-list-item v-for="servico in listOcupacoes" :key="servico._id" class="listaOcupacoes">
        <md-checkbox v-model="listChecked" :value="servico._id">{{servico.ocupacao}}</md-checkbox>
      </md-list-item>

    </md-list>

    <md-list>
      <md-subheader>Descrição de experiência</md-subheader>

      <md-field>
        <label>Descrição sobre sua(s) experiência(s)</label>
        <md-textarea v-model="descricaoDeExperiencia" md-counter="240" ></md-textarea>
      </md-field>
    </md-list>

    <md-button @click="gravarOcupacao">
      <span>Gravar</span>
    </md-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AuthOrApp from "../components/AuthOrApp";

export default {
  components: {
    AuthOrApp
  },
  data: () => ({
    listOcupacoes: [],
    listCadastrados: [],
    listChecked: [],
    teste: false,
    descricaoDeExperiencia: ""
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
    async buscarCadastrados() {
      try {
        const url = `/servicoUsuario/${this.usuario._id}`;

        let response = await this.$http.get(url);

        console.log("buscar", response);

        this.listChecked = response.data.ocupacao;

        this.descricaoDeExperiencia = response.data.descricao;
      } catch (error) {
        console.log("aqui");
      }
    },
    async gravarOcupacao() {
      console.log(this.listOcupacoes);
      try {
        let payload = {
          idUsuario: this.usuario._id,
          ocupacao: this.listChecked,
          descricao: this.descricaoDeExperiencia
        };

        let response = await this.$http.post("/servicoUsuario", payload);
      } catch (error) {
        console.log("para merde");
      }
    }
  },

  computed: {
    ...mapGetters(["usuario"])
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
.listaOcupacao {
  margin: 0px auto;
  padding: 20px 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.full-control > .md-list {
  width: 320px;
  max-width: 100%;
  height: 400px;
  display: inline-table;/*inline-block;*/
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
  vertical-align: top;
}
</style>