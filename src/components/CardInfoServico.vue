<template>
  <div>
    <md-card>
      <md-card-header>
        <md-avatar>
          <img src="/assets/github.png" alt="Avatar" />
        </md-avatar>

        <div class="md-title">{{infoServicos.titulo}}</div>
        <!--<div class="md-subhead">Subtitle here</div>-->
      </md-card-header>

      <md-card-media>
        <img src="/assets/service.png" alt="People" />
      </md-card-media>

      <md-card-content>{{infoServicos.descricao}}</md-card-content>

      <md-card-actions>
        <md-button>Contratar</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    infoServicos: {
      type: Object,
      required: true
    }
  },

  data: () => ({})
};
</script>

<style>
.md-card {
  width: 320px;
  height: 400px;
  margin: 15px;
  display: inline-block;
  vertical-align: top;
}

.md-card-content{
  overflow: hidden;
  height: 85px;
}
</style>