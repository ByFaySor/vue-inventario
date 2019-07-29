<?php

// https://victorroblesweb.es/2017/04/23/cabeceras-http-php-permitir-acceso-cors/

header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' );
header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE' );
header( 'Allow: GET, POST, OPTIONS, PUT, DELETE' );
$method = $_SERVER['REQUEST_METHOD'];
if ( $method == 'OPTIONS' ) { die(); }


// https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router

$data = [];

$data['default'] = [
	'auth' => false,
	'message' => 'Datos incorrectos en el usuario o contraseña, intente nuevamente.'
];

$data['admin'] = [
	'auth' => true,
	'token' => md5( rand( 1, 100000 ) ),
	'user' => [
		'id' => 1,
		'name' => 'Admin',
		'email' => 'admin@gmail.com',
		'user_pass' => sha1( 12345 ),
		'is_admin' => true,
	],
];

$data['faysor'] = [
	'auth' => true,
	'token' => md5( rand( 1, 100000 ) ),
	'user' => [
		'id' => 1,
		'name' => 'FaySor',
		'email' => 'faysorx3@gmail.com',
		'user_pass' => sha1( 12345 ),
		'is_admin' => false,
	],
];


// https://stackoverflow.com/questions/49070403/how-to-retrieve-variables-in-php-sent-by-axios-post-request

$request = json_decode( file_get_contents( 'php://input' ), true );
$username = strtolower( $request['username'] );

$existUser = ( ( empty( $data[ $username ] ) ? $data['default'] : $data[ $username ] ) );

echo json_encode( $existUser );

?>