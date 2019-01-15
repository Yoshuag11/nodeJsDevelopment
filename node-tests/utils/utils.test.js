const expect = require( 'expect' );

const utils = require( './utils' );

describe( 'Utils', () => {
	describe( '#add', () => {
		it( 'should add two numbers', () => {
			const res = utils.add( 33, 11 );

			expect( res ).
				toBe( 44 ).
				toBeA( 'number' );
		} );
		it( 'should async add two numbers', done => {
			utils.asyncAdd( 4, 3, sum => {
				expect( sum ).
					toBe( 7 ).
					toBeA( 'number' );
				done();
			} );
		} );
	} );
	describe( '#square', () => {
		it( 'should square a number', () => {
			const res = utils.square( 3 );

			expect( res ).
				toBe( 9 ).
				toBeA( 'number' );
		} );
		it( 'should async square a number', done => {
			utils.asyncSquare( 3, square => {
				expect( square ).
					toBe( 9 ).
					toBeA( 'number' );
				done();
			} );
		} );
	} );
	});
// it( 'should expect some values', () => {
// 	expect( 12 ).toNotBe( 11 );
// 	expect( { name: 'andrew' } ).toNotEqual( { name: 'Andrew' } );
// 	expect( [ 2, 3, 4 ] ).toExclude( 1 );
// 	expect( {
// 		name: 'Hector',
// 		age: 31,
// 		location: 'Tijuana'
// 	} ).toExclude( {
// 		age: 25
// 	} );
// } );
it( 'should set firstName and lastName', () => {
	const user = {
			age: 31,
			location: 'Tijuana'
		};
	const res = utils.setName( user, 'Daniel Gameros' );
	expect( res ).
		toBe( user ).
		toEqual( user ).
		toInclude( {
			firstName: 'Daniel',
			lastName: 'Gameros'
		} );
} );