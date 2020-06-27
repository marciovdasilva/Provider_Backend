<template>
  <div>
    <div>
      <md-dialog :md-click-outside-to-close="false" :md-active.sync="value">
        <md-dialog-title>Cadastre-se</md-dialog-title>
        <md-content>
          <md-field>
            <label>Nome de Usuario</label>
            <md-input v-model="nomeUsuario"></md-input>
            <span class="md-error">There is an error</span>
          </md-field>

          <md-field>
            <label>E-mail</label>
            <md-input v-model="email"></md-input>
            <span class="md-error">There is an error</span>
          </md-field>
          <md-field class>
            <label>Senha</label>
            <md-input v-model="password" type="password"></md-input>
            <span class="md-error">There is an error</span>
          </md-field>
          <label>Tipo de Usuario</label>
          <div>
            <md-radio v-model="radio" value="usuario" class="md-accent">
              Usuario
              <small>(Default)</small>
            </md-radio>
            <md-radio v-model="radio" value="prestador" class="md-accent">Prestador de Serviço</md-radio>
          </div>
        </md-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click="closedModal">Fechar</md-button>
          <md-button class="md-primary" @click="salveModal">Cadastrar</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
import axios from "axios";

export default {
  name: "CadastroUsuario",
  components: {
    Login
  },

  props: {
    value: {
      type: Boolean
    }
  },

  data: () => ({
    showDialogLocal: true,
    nomeUsuario: "",
    radio: "usuario",
    dadosLogin: { usuario: "marcio", senha: "123" },
    email: "",
    password: ""
  }),

  methods: {
    closedModal() {
      this.$emit("input", false);
    },

    async salveModal() {
      let payload = this.novoUsuario(
        this.nomeUsuario,
        this.email,
        this.password,
        this.radio
      );
      console.log(payload);
      await axios.post("http://localhost:3333/usuario", payload).then(
        response => {
          this.$emit("input", false);
        },
        error => {
          const objError = error.response.data
          console.log(objError);
        }
      );

      this.$emit("input", false);
    },
    novoUsuario(nome, email, senha, tipo) {
      let usuario = {
        nome,
        email,
        senha,
        tipo
      };
      return usuario;
    }
  },

  watch: {
    showDialog() {
      this.showDialogLocal = this.showDialog;
    }
  },

  mounted() {}
};
</script>

<style lang="scss" scoped>
.md-radio {
  display: flex;
  margin: auto;
}
.md-content {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>