<template>
  <div class="md-container">
    <h1>Home</h1>
    <div class="">
    </div>

    <img src="../assets/Profissao-definicao1.png" alt="Paris">
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  data: () => ({}),

  mounted() {
    console.log("dentro da home");
  }
};
</script>

<style>
  .imagemHome{
    height: 468px;
    width: 100%;
    background-image: url("../assets/Profissao-definicao1.png");
  }
  </style>