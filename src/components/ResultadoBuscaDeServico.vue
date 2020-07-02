<template>
  <div class="md-layout md-gutter">
    <div v-for="item in listaPesquisaPrestadores" :key="item._id" class="md-layout-item">
      <CardInfoServico :infoServicos="item"  />
    </div>
    <div v-if="listaPesquisaPrestadores.length == 0" class="md-layout-item"><span>não encotrou resultado</span></div>
  </div>
</template>

<script>
import CardInfoServico from "../components/CardInfoServico";
import { mapGetters } from "vuex";

export default {
  components: {
    CardInfoServico
  },

  data: () => ({
    inforser: {
      titulo: "teste",
      descricao: "sdfaçdfkjaçsdkfjakdh fçahdçfakhdka hçdfhaçdfkhaçdslkfh"
    }
  }),
  methods: {},
  computed: {
    ...mapGetters(["listaPesquisaPrestadores"])
  }
};
</script>

<style lang="scss" scoped>
  

</style>