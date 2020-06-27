import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Avaliacao from './views/Avaliacao.vue'
import Contatenos from './views/Contatenos.vue'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
        },
        {
			path: '/avaliacao',
			name: 'avaliacao',
			component: Avaliacao
		},
		{
			path: '/Contatenos',
			name: 'contatenos',
			component: Contatenos
        },
	]
})