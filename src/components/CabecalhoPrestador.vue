<template>
  <div class="md-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible =  !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">
              <h1>
                Provider
                <span class="PontoLaranja">.</span>
              </h1>
            </span>
          </div>
        </div>
        <div class="md-toolbar-row md-large">
          <md-tabs md-sync-route>
            <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>

            <md-button to="/prestador">
              <md-icon>construction</md-icon>
              <span>Serviço</span>
            </md-button>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <md-divider></md-divider>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
/*
import CadastroUsuario from "../src/components/CadastroUsuario";
import Login from "../src/components/Login";
import { mapGetters, mapMutations } from "vuex";
*/

export default {
  name: "CabecalhoPrestador",

  components: {},

  data: () => ({
    showModalCadastroUsuaio: false,
    showModalLogin: false,
    menuVisible: false,
    selectedEmployee: null,
    toggleCard: false
  }),

  methods: {},

  computed: {}
};
</script>

<style>
.PontoLaranja {
  color: #f16821;
}
</style>