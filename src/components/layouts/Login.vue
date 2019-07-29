<template>
	<v-app>
		<v-toolbar>
			<v-toolbar-title><a @click="$router.push( '/' )">Inventario</a></v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>
		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>