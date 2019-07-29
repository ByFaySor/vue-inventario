<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			permanent
			absolute
		>
			<v-toolbar flat class="transparent">
				<v-list class="pa-0">
					<v-list-tile avatar>
						<v-list-tile-avatar>
							<img src="https://randomuser.me/api/portraits/men/85.jpg">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>FaySor</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-toolbar>
			<v-list class="pt-0" dense>
				<v-divider></v-divider>
				<v-list-tile
					v-for="item in items"
					:key="item.title"
					@click="item.click( item.route )"
				>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar
			app
			:clipped-left="clipped"
		>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title v-text="title"></v-toolbar-title>
		</v-toolbar>
		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
export default {
	data () {
		return {
			drawer: true,
			items: [
				{ title: 'Inicio', icon: 'home', route: 'base', click: this.toGo },
				{ title: 'Productos', icon: 'widgets', route: 'producto', click: this.toGo },
				{ title: 'Categorías', icon: 'list', route: 'categoria', click: this.toGo },
				{ title: 'Cerrar sesión', icon: 'close', click: this.signOut },
			],
			right: null,
			title: 'Inventario'
		}
	},
	methods: {
		toGo( route ) {
			this.$router.push( route )
		},
		signOut() {
			this.$store.dispatch( 'LOGOUT' )
			.then( () => {
					this.$router.push( 'login' )
					this.$store.dispatch( 'setLayout', 'login' )
				}
			)
			.catch( err => console.log( err ) )
		},
	},
	name: 'App'
}
</script>