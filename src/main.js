/*
	Referencias:
	https://medium.com/@nmariasdev/vue-js-crear-una-aplicaci%C3%B3n-con-m%C3%BAltiples-layouts-bcfdede95ba6
	https://medium.com/@CKGrafico/configuring-a-middleware-with-vue-router-6343d7be5e6c
	https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
	https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router#toc-setup-nodejs-server
	https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
	https://blog.logrocket.com/vuex-showdown-mutations-vs-actions-f48f2f7df54b/
	https://medium.com/vue-mastery/building-an-interactive-and-distraction-free-form-with-vue-bfe23907e981
	https://morioh.com/p/d1b8c71f74a3
	https://baianat.github.io/vee-validate/
	https://parzibyte.me/blog/2019/06/02/validar-formularios-vue-vee-validate/

*/
import Vue					from 'vue'
import './plugins/vuetify'
import './plugins/vee-validate'
import App					from './App.vue'
import router				from './router'
import store				from './store'
import Axios				from 'axios'

// URL base
Vue.prototype.$http = Axios
/*
const token = localStorage.getItem( 'token' )
if ( token ) {
	Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
*/
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h( App )
}).$mount( '#app' )