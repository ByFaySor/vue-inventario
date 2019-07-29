<template>
	<v-container>
		<v-layout align-center>
			<v-flex>
				<h3 class="display-3">Inicio</h3>
				<h3 class="display-3">Ejemplo simple de un proyecto con VUE CLI</h3>
				<span class="subheading">¡Éxitos!</span>
				<v-divider class="my-3"></v-divider>
				<div class="title mb-3">Caracteristicas utilizadas Front-End:</div>
				<ul>
					<li>Yarn</li>
					<li>Vue cli</li>
					<li>Vuetify</li>
					<li>Vue Router</li>
					<li>Vuex</li>
					<li>Axios</li>
					<li>VeeValidate</li>
				</ul>
				<v-divider class="my-3"></v-divider>
				<div class="title mb-3">Caracteristicas utilizadas Back-End:</div>
				<ul>
					<li>Apache</li>
					<li>PHP 7.3</li>
				</ul>
				<v-btn @click="$router.push( '/login' )" large color="primary" class="mx-0">Iniciar sesión</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	created () {
		this.$store.dispatch( 'setLayout', 'login' )
	}
}
</script>