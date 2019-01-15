const express = require( 'express' );

const app = express();

app.get( '/', ( req, res ) => {
	// res.send( 'Hello world!' );
	res.status( 404 ).send( {
		error: 'Page not found.',
		name: 'Todo App v1.0'
	} );
} );
app.get( '/users', ( req, res ) => {
	res.send( [ {
			name: 'Hector',
			age: 31
		}, {
			name: 'Daniel',
			age: 27
		}, {
			name: 'Joilen',
			age: 10
		} ]
	);
} );
app.listen( 3003 );

module.exports.app = app;