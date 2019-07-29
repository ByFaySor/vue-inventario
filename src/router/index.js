import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/views/Inicio'
import Login from '@/components/views/Login'
import Base from '@/components/views/Base'
import Admin from '@/components/views/Admin'
import Producto from '@/components/views/Producto'
import Categoria from '@/components/views/Categoria'

Vue.use( Router )

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'inicio',
			component: Inicio,
			meta: {
				guest: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: { 
				guest: true
			}
		},
		{
			path: '/base',
			name: 'base',
			component: Base,
			meta: { 
				requiresAuth: true
			}
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin,
			meta: { 
				requiresAuth: true,
				is_admin : true
			}
		},
		{
			path: '/producto',
			name: 'producto',
			component: Producto,
			meta: { 
				requiresAuth: true
			}
		},
		{
			path: '/categoria',
			name: 'categoria',
			component: Categoria,
			meta: { 
				requiresAuth: true
			}
		},
	]
})

router.beforeEach(( to, from, next ) => {
	if ( to.matched.some( record => record.meta.requiresAuth ) ) {
		if ( localStorage.getItem( 'token' ) == null ) {
			next({
				path: '/login',
				params: { nextUrl: to.fullPath }
			})
		} else {
			let user = JSON.parse( localStorage.getItem( 'user' ) )
			if ( to.matched.some( record => record.meta.is_admin ) ) {
				if ( user.is_admin == 1 ) {
					next()
				} else {
					next( { name: 'base'} )
				}
			} else {
				next()
			}
		}
	} else if ( to.matched.some( record => record.meta.guest ) ) {
		if ( localStorage.getItem( 'token' ) == null){
			next()
		} else {
			next( { name: 'base'} )
		}
	} else {
		next() 
	}
})

export default router