const utils = require( './utils' );

it( 'should add two numbers', () => {
	const res = utils.add( 33, 11 );

	if ( res !== 44 ) {
		throw Error( `Expected 44, but got ${ res }.` );
	}
} );
it( 'should square two numbers', () => {
	const res = utils.square( 3 );

	if ( res !== 9 ) {
		throw Error( `Expected 9, but got ${ res }.` );
	}
} );