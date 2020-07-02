<template>
  <div class="md-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">
              <h1>
                Provider
                <span class="PontoLaranja">.</span>
              </h1>
            </span>
          </div>
        </div>

        <div class="md-toolbar-row md-large">
          <md-autocomplete
            class="search"
            v-model="selectedOcupacao"
            :md-options="filtroServicos"
            md-layout="box"
            :md-changed="changeSelecaoOcupacao()"
          >
            <label>Oque procura...</label>
          </md-autocomplete>

          <md-tabs md-sync-route>
            <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
            <!--<md-tab id="tab-pages" md-label="Avaliação" to="/Avaliacao"></md-tab>
            <md-tab id="tab-posts" md-label="Contate-nos" to="/Contatenos"></md-tab>-->
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <md-divider></md-divider>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
const converteItemParaSeletor = x => ({
  id: x._id,
  descricao: x.ocupacao,
  toLowerCase: () => x.ocupacao.toLowerCase(),
  toString: () => x.ocupacao
});

import { mapGetters, mapMutations, mapActions } from "vuex";
import { EventBus } from "../functions/eventBus";

export default {
  name: "CabecalhoUsuario",

  components: {},

  data: () => ({
    showModalCadastroUsuaio: false,
    showModalLogin: false,
    menuVisible: false,
    selectedOcupacao: null,
    toggleCard: false,
    listaServicos: []
  }),

  methods: {
    ...mapMutations(["setUsuario", "setMostraResultadoPesquisa"]),

    async carregaServicos() {
      try {
        let response = await this.$http.get("/ocupacao");

        this.listaServicos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    executaPesquisa() {
      //EventBus.$emit('servicoSelecionado',true)
    },

    changeSelecaoOcupacao() {
      if (this.selectedOcupacao == null || this.selectedOcupacao == "") {
        this.setMostraResultadoPesquisa(false);
        //EventBus.$emit("servicoSelecionado",false)
        return;
      }
      this.$store.dispatch(
        "pesquisaPrestadoresPorOcupacao",
        this.selectedOcupacao
      );

      //EventBus.$emit("servicoSelecionado",true)
    }
  },

  computed: {
    ...mapGetters(["usuario"]),

    filtroServicos() {
      let teste = this.listaServicos.map(converteItemParaSeletor);
      console.log("filtroServico", teste);
      return teste;
    }
  },
  async mounted() {
    this.carregaServicos();
  }
};
</script>

<style>
.PontoLaranja {
  color: #f16821;
}
</style>