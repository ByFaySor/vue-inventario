<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 m4 offset-xs0 offset-sm3 offset-m4>
				<v-form @submit.prevent="register">
					<v-text-field label="Nombre de Usuario"></v-text-field>
					<v-text-field label="Email"></v-text-field>
					<v-text-field label="Contraseña" type="password"></v-text-field>
					<v-text-field label="Confirmar Contraseña" type="password"></v-text-field>
					<v-btn block color="primary">Registrarse</v-btn>
				</v-form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		
	},
	methods: {
		register () {
			$router.push('/principal')
		}
	},
	created () {
		this.$store.dispatch( 'setLayout', 'login' )
	}
}
</script>