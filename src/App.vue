<template>
  <div id="app">
    <AuthOrApp/>
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
                      <md-button @click="logout">Logout</md-button>
                    </div>
                  </div>
                </md-menu-content>
              </md-menu>
            </div>
          </div>
        </div>
      </div>

      <CabecalhoPrestador v-if="isUsuarioPrestador" />
      <CabecalhoUsuario v-else />
    </div>

    <CadastroUsuario v-model="showModalCadastroUsuaio" />
    <Login v-model="showModalLogin" />
  </div>
</template>

<script>
import CadastroUsuario from "../src/components/CadastroUsuario";
import Login from "../src/components/Login";
import { mapGetters, mapMutations } from "vuex";
import CabecalhoPrestador from "../src/components/CabecalhoPrestador";
import CabecalhoUsuario from "../src/components/CabecalhoUsuario";
import AuthOrApp from "../src/components/AuthOrApp";

export default {
  name: "App",

  components: {
    CadastroUsuario,
    Login,
    CabecalhoPrestador,
    CabecalhoUsuario,
    AuthOrApp
  },

  data: () => ({
    showModalCadastroUsuaio: false,
    showModalLogin: false,
    toggleCard: false
  }),

  methods: {
    ...mapMutations(["setUsuario"]),
    crieSuaConta() {
      this.showModalCadastroUsuaio = !this.showModalCadastroUsuaio;
    },

    login() {
      this.showModalLogin = !this.showModalLogin;
    },
    logout() {
      this.setUsuario({});
      localStorage.removeItem("usuario");
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
  display: flex;
  align-items: left;
  justify-content: left;
}
</style>
