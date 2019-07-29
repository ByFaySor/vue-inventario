<template>
	<v-container>
		<v-jumbotron color="grey lighten-2">
			<v-container fill-height>
			<v-layout align-center>
				<v-flex>
					<h3 class="display-3">Productos</h3>
				</v-flex>
			</v-layout>
			</v-container>
		</v-jumbotron>
	</v-container>
</template>

<script>
export default {
	created () {
		this.$store.dispatch( 'setLayout', 'base' )
	}
}
</script>