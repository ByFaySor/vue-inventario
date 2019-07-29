<template>
	<v-container>
		<v-layout row>
			<v-snackbar
				v-model="snackbar"
				color="error"
				top
			>
				{{ message }}
				<v-btn
					dark
					text
					@click="snackbarLoginToggle"
				>
					Cerrar
				</v-btn>
			</v-snackbar>
			<v-flex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>
				<v-form @submit.prevent="submit">
					<v-text-field
						label="Nombre de Usuario"
						data-vv-as="nombre de usuario"
						data-vv-name="username"
						v-validate="'required'"
						:error-messages="errors.collect( 'username' )"
						v-model="username"
						autofocus
						autocomplete="off"
					></v-text-field>
					<v-text-field
						label="Contraseña"
						type="password"
						data-vv-as="contraseña"
						data-vv-name="password"
						v-validate="'required'"
						:error-messages="errors.collect( 'password' )"
						v-model="password"
						autocomplete="off"
					></v-text-field>
					<v-btn block color="primary" type="submit">Entrar</v-btn>
				</v-form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	$_veeValidate: {
		validator: 'new'
	},
	data() {
		return {
			snackbar: false,
			message: '',
			username : '',
			password : '',
		}
	},
	methods: {
		submit() {
			this.$validator.validateAll().then(( result ) => {
				if ( result ) {
					this.login()
				}
			})
		},
		clear () {
			this.username = ''
			this.password = ''
			this.$validator.reset()
		},
		login () {
			let username = this.username
			let password = this.password
			this.$store.dispatch( 'login', { username, password } )
			.then( () => this.$router.push( 'base' ) )
			.catch( err => console.log( err ) )
		},
		snackbarLoginToggle () {
			this.$store.dispatch( 'setSnackbarLoginShow' )
		},
	},
	mounted() {
		this.$store.watch(
			( state, getters ) => getters.snackbarLoginShow,
			( after ) => {
				this.snackbar = after
			}
		);
		this.$store.watch(
			( state, getters ) => getters.snackbarLoginShowMessage,
			( after ) => {
				this.message = after
			}
		);
	},
	created () {
		this.$store.dispatch( 'setLayout', 'login' )
	}
}
</script>