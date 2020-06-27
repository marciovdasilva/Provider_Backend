<template>
  <div class="Login">
    <div>
      <md-dialog :md-active.sync="value">
        <md-dialog-title>Login</md-dialog-title>
        <md-content>
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

          <div class="log">
            <md-button class="md-raised md-primary" @click="autenticacao">Login</md-button>
          </div>
        </md-content>
        <md-dialog-actions>
          <label>Você não tem conta?</label>
          <md-button class="md-primary" @click="criarConta">Crie uma conta</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  name: 'login',
  props: {
    value: {
      type: Boolean,
    }
  },

  data: () => ({
    showDialogLocal: true,
    email: "",
    password: ''
  }),

  methods: {

    ...mapMutations(['setUsuario']),

    closedModal() {
      this.$emit("input", false);
    },

    async autenticacao() {
      try {
        let payload = this.loginUsuario(this.email, this.password)

        let config = {
          headers: payload
        }

        let response = await this.$http.get('/login', config)  
        
        if (response.data._id != undefined){          
          this.setUsuario(response.data)
        }

        this.$emit('input',false)
      } catch (error) {
          console.log('erro erro')
      }

      this.$emit("input", false);
    },

    loginUsuario(email, senha){
      let loginUsu ={
        email,
        senha
      }
      return loginUsu
      
    },
    criarConta(){

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
.log {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>