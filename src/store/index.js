import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use( Vuex )

export default new Vuex.Store({
	state: {
		layout: 'login-layout',
		status: '',
		token: localStorage.getItem( 'token' ) || '',
		user: {},
		snackbar_login_show: false,
		snackbar_login_show_message: '',
	},
	mutations: {
		SET_LAYOUT ( state, layout ) {
			state.layout = layout + '-layout'
		},
		AUTH_REQUEST ( state ) {
			state.status = 'loading'
		},
		AUTH_SUCCESS ( state, token, user ) {
			state.status = 'success'
			state.token = token
			state.user = user
		},
		AUTH_ERROR ( state ) {
			state.status = 'error'
		},
		LOGOUT( state ) {
			state.status = ''
			state.token = ''
		},
		SNACKBAR_LOGIN_SHOW( state, message ) {
			state.snackbar_login_show = ! state.snackbar_login_show
			if ( message ) state.snackbar_login_show_message = message
		},
	},
	actions: {
		setLayout( { commit }, layout ) {
			commit( 'SET_LAYOUT', layout )
		},
		setSnackbarLoginShow( { commit } ) {
			commit( 'SNACKBAR_LOGIN_SHOW', false )
		},
		login( { commit }, user ) {
			return new Promise(( resolve, reject ) => {
				commit( 'AUTH_REQUEST' )
				axios({ url: 'http://localhost/testing/json/auth.php', data: user, method: 'POST' })
				.then(resp => {
					let auth = resp.data.auth
					let message = resp.data.message
					if ( ! auth ) {
						commit( 'SNACKBAR_LOGIN_SHOW', message )
						return
					}
					const token = resp.data.token
					const user = resp.data.user
					localStorage.setItem( 'token', token )
					//axios.defaults.headers.common['Authorization'] = token
					commit( 'AUTH_SUCCESS', token, user )
					resolve( resp )
				})
				.catch(err => {
					commit( 'AUTH_ERROR' )
					localStorage.removeItem( 'token' )
					reject( err )
				})
			})
		},
		register( { commit }, user ) {
			return new Promise(( resolve, reject ) => {
				commit( 'AUTH_REQUEST' )
				axios({ url: 'http://localhost:3000/register', data: user, method: 'POST' })
				.then(resp => {
					const token = resp.data.token
					const user = resp.data.user
					localStorage.setItem( 'token', token )
					//axios.defaults.headers.common['Authorization'] = token
					commit( 'AUTH_SUCCESS', token, user )
					resolve( resp )
				})
				.catch(err => {
					commit( 'AUTH_ERROR', err )
					localStorage.removeItem( 'token' )
					reject( err )
				})
			})
		},
		logout( { commit } ) {
			return new Promise(( resolve, reject ) => {
				commit( 'LOGOUT' )
				localStorage.removeItem( 'token' )
				//delete axios.defaults.headers.common['Authorization']
				resolve()
			})
		}
	},
	getters : {
		isAuthenticated: state => !! state.token,
		authStatus: state => state.status,
		snackbarLoginShow: state => state.snackbar_login_show,
		snackbarLoginShowMessage: state => state.snackbar_login_show_message,
	}
})