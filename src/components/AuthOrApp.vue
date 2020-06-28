<template>
    <div>

    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'


export default {
    data: () =>({

    }),
    methods: {
        ...mapMutations(['setUsuario']),
        carregaUsuarioStorage(){
            let usuarioStorage = localStorage.getItem('usuario') || null
            return usuarioStorage
        },
        redirectHome(){
            this.$router.replace('/')
        },
        logar(usuario){
            this.setUsuario(usuario)
        },
        verificarLogin(){
            
            let usuarioLogado = this.usuario || null

            if(Object.keys(usuarioLogado) == 0)
                usuarioLogado = null

            let usuarioStorage = this.carregaUsuarioStorage() || null


            if (usuarioLogado?._id != null )
                return
                
            if(usuarioStorage != null){
                this.logar(JSON.parse(usuarioStorage))
            }else{
                this.redirectHome()
            }
        }
    },
    computed:{
        ...mapGetters(['usuario']),
 
    },
    mounted(){
        this.verificarLogin()
    }

};
</script>

<style>
</style>