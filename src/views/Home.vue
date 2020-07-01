<template>
  <div class="md-container">
    
    <span class="md-title">
      <h2>
        Muito mais facil contratar um colaborador, escolha o melhor
        <span class="PontoLaranja">.</span>
      </h2>
    </span>

    <img src="../assets/Profissao-definicao1.png" alt="Paris" />
  </div>
</template>

<script>
import CardInfoServico from "../components/CardInfoServico"
export default {
  name: "Home",
  components: {
    CardInfoServico,
  },

  data: () => ({
    inforser: {titulo: 'teste', descricao: 'sdfaçdfkjaçsdkfjakdh fçahdçfakhdka hçdfhaçdfkhaçdslkfh'}
  }),

  mounted() {
    console.log("dentro da home");
    
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