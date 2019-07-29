<template>
	<keep-alive>
		<component :is="layout"></component>
	</keep-alive>
</template>

<script>
import LoginLayout	from './components/layouts/Login'
import BaseLayout	from './components/layouts/Base'
import { mapState }	from 'vuex'

export default {
	components: { LoginLayout, BaseLayout },
	computed: mapState( ['layout'] ),
}
</script>