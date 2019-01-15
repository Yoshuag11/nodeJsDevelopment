const expect = require( 'expect' );
const rewire = require( 'rewire' );

const app = rewire( './app' );

describe( 'App', () => {
	const db = {
		saveUser: expect.createSpy()
	};

	app.__set__( 'db', db );

	it( 'should call the spy correctly', () => {
		const spy = expect.createSpy();

		spy( 'Hector', 31 );
		expect( spy ).
			toHaveBeenCalledWith( 'Hector', 31 )
			// toHaveBeenCalled();
	} );
	it( 'should call saveUser with user object', () => {
		const password = '123abc';
		const email = 'hector@example.com';

		app.handleSignUp( email, password );
		expect( db.saveUser ).toHaveBeenCalledWith( { email, password } )
	} );
} );