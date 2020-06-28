<template>
  <div id="app">
    <div class="page-container">
      <div class="md-layout">
        <div class="md-layout-item md-size-30 barraMediaSocial">
          <md-button class="md-icon-button" icon md-src="/assets/facebook.svg">
            <md-icon md-src="/assets/facebook.svg" />
          </md-button>
          <md-button class="md-icon-button">
            <md-icon md-src="/assets/twitter.svg" />
          </md-button>
          <md-button class="md-icon-button">
            <md-icon md-src="/assets/instagram.svg" />
          </md-button>
          <md-button class="md-icon-button">
            <md-icon md-src="/assets/linkedin.svg" />
          </md-button>
        </div>
        <div class="md-layout-item barraMediaSocial"></div>
        <!-- {{ usuarioLogado }}-->
        <div class="md-layout-item barraMediaSocial">
          <div class="md-layout-item md-layout md-gutter" v-if="!isUsuarioLogado">
            <div>
              <md-button></md-button>
              <!--ajustar alinhamento-->
              <md-button></md-button>
              <md-button class="md-primary" @click="crieSuaConta">Crie a sua conta</md-button>
              <md-button class="md-primary" @click="login">Entre</md-button>
            </div>
          </div>

          <!--ajustar quando estiver logado-->
          <div class="md-layout-item md-layout md-gutter barraMediaSocial" v-if="isUsuarioLogado">
            <div class="md-layout-item"></div>
            <div class="md-layout-item"></div>
            <div class="md-layout-item"></div>
            <div class="md-layout-item md-size-30">
              <!-- colocar uma botão-->
              <md-menu md-size="big" md-direction="top-start" :md-active.sync="toggleCard">
                <md-button class="md-icon-button" md-menu-trigger>
                  <md-icon class="Person">person</md-icon>
                </md-button>

                <md-menu-content>
                  <div class="author-card">
                    <md-avatar class="md-large">
                      <img src="/assets/github.png" alt="Marcos Moura" />
                    </md-avatar>

                    <div class="author-card-info">
                      {{ usuarioLogado }}
                      <span>{{usuario.nome}}</span>
                      <md-divider></md-divider>
                      <md-button>Logout</md-button>
                    </div>
                  </div>
                </md-menu-content>
              </md-menu>
            </div>
          </div>
        </div>
      </div>

      <!--<div class="barraMediaSocial">
        <md-button class="md-icon-button">
          <md-icon md-src="/assets/facebook.svg" />
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>facebook</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>facebook</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>facebook</md-icon>
        </md-button>

        <md-button class="md-primary">Crie a sua conta</md-button>
        <md-button class="md-primary">Entre</md-button>
      </div>-->

      <md-app md-waterfall md-mode="fixed-last">
        <md-app-toolbar class="md-large md-dense">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <md-button
                class="md-icon-button"
                @click="menuVisible = !menuVisible"
                v-if="isUsuarioPrestador"
              >
                <md-icon>menu</md-icon>
              </md-button>

              <span class="md-title">
                <h1>
                  Provider
                  <span class="PontoLaranja">.</span>
                </h1>
              </span>
            </div>

            <!--<div class="md-toolbar-section-end">
              <md-button class="md-icon-button">
                <md-icon>more_vert</md-icon>
              </md-button>
            </div>-->
          </div>

          <div class="md-toolbar-row md-large">
            <md-autocomplete
              class="search"
              v-model="selectedEmployee"
              :md-options="employees"
              md-layout="box"
            >
              <label>Oque procura...</label>
            </md-autocomplete>

            <md-tabs md-sync-route>
              <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
              <md-tab id="tab-pages" md-label="Avaliação" to="/Avaliacao"></md-tab>
              <md-tab id="tab-posts" md-label="Contate-nos" to="/Contatenos"></md-tab>
            </md-tabs>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" v-if="isUsuarioPrestador">
          <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>

              <md-button to="/prestador">
                <md-icon>construction</md-icon>
                <span>Serviço</span>
              </md-button>
            </md-list-item>

            <!--s<md-list-item>
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
            </md-list-item>-->
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <md-divider></md-divider>
        </md-app-content>
      </md-app>
    </div>
    <md-content>
      <router-view></router-view>
    </md-content>

    <CadastroUsuario v-model="showModalCadastroUsuaio" />
    <Login v-model="showModalLogin" />
  </div>
</template>

<script>
import CadastroUsuario from "../src/components/CadastroUsuario";
import Login from "../src/components/Login";
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: {
    CadastroUsuario,
    Login
  },

  data: () => ({
    showModalCadastroUsuaio: false,
    showModalLogin: false,
    menuVisible: false,
    selectedEmployee: null,
    toggleCard: false,
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]
  }),

  methods: {
    crieSuaConta() {
      this.showModalCadastroUsuaio = !this.showModalCadastroUsuaio;
    },

    login() {
      this.showModalLogin = !this.showModalLogin;
    }
  },

  computed: {
    ...mapGetters(["usuario"]),

    usuarioLogado() {
      return this.usuario.email != "" ? this.usuario.email : "";
    },

    isUsuarioLogado() {
      let logado = this.usuario.email || "";
      return logado != "" ? true : false;
    },
    isUsuarioPrestador() {
      return this.usuario.tipo == "prestador";
    }
  }
};
</script>

<style>
.barraMediaSocial {
  background-color: #ccc;
  padding: 0;
}

.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box label,
.md-toolbar .md-autocomplete.md-theme-default.md-autocomplete-box input {
  width: 80% !important;
  background-color: #ccc;
  border-radius: 5px;
}

.md-tabs.md-theme-default .md-tabs-navigation {
  background-color: #f5f5f5 !important;
}
.PontoLaranja {
  color: #f16821;
}
.Person {
  /*não esta funcionado*/
  display: flex;
  align-items: left;
  justify-content: left;
}
</style>
