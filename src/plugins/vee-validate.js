import Vue							from 'vue'
import VeeValidate, { Validator }	from 'vee-validate'
import es							from 'vee-validate/dist/locale/es'

/*
Validator.extend('truthy', {
	getMessage: field => 'The ' + field + ' value is not truthy.',
	validate: value => !! value
});
*/

Vue.use( VeeValidate, {
	useConstraintAttrs: false,
})

/*
const es = {
	custom: {
		username: {
			required: 'Debe indicar el nombre de usuario'
		},
		password: {
			required: () => 'La contraseña es requerida'
		}
	}
};
*/

Validator.localize( 'es', es )