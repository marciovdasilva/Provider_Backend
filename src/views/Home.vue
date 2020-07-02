<template>
  <div class="md-container">
    <ResultadoBuscaDeServico v-if="mostraResultadoPesquisa" />
    <TelaInicial v-else />
  </div>
</template>

<script>
import TelaInicial from "../components/TelaInicial";
import CardInfoServico from "../components/CardInfoServico";
import { EventBus } from "../functions/eventBus";
import ResultadoBuscaDeServico from "../components/ResultadoBuscaDeServico";
import {mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    CardInfoServico,
    TelaInicial,
    ResultadoBuscaDeServico
  },

  data: () => ({
    inforser: {
      titulo: "teste",
      descricao: "sdfaçdfkjaçsdkfjakdh fçahdçfakhdka hçdfhaçdfkhaçdslkfh"
    },
    mostraPesquisa: false
  }),
  computed:{
    ...mapGetters(["mostraResultadoPesquisa"])
  },

  mounted() {
    
    EventBus.$on("servicoSelecionado", (payload) => {this.mostraPesquisa = payload});
  },

  beforeDestroy() {
    EventBus.$off("servicoSelecionado");
  }
};
</script>

<style>
.imagemHome {
  height: 468px;
  width: 100%;
  background-image: url("../assets/Profissao-definicao1.png");
}
</style>