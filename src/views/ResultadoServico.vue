<template>
  <div>
      <CardInfoServico  
      :infoServicos="inforser" 
    />
  </div>
</template>

<script>
import CardInfoServico from "../components/CardInfoServico"

export default {
    components: {
    CardInfoServico,
  },

  data: () => ({
    inforser: {titulo: 'teste', descricao: 'sdfaçdfkjaçsdkfjakdh fçahdçfakhdka hçdfhaçdfkhaçdslkfh'}
  }),
}
</script>

<style>

</style>