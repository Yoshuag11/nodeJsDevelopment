const square = x => x * x;

// console.log( square( 9 ) );

const person = {
	name: 'Hector',
	sayHi: () => {
		console.log( arguments );
		console.log( `Hi. I'm ${ this.name }` );
	},
	sayHiAlt () {
		console.log( arguments );
		console.log( `Hi. I'm ${ this.name }` );
	}
};

person.sayHi( 1, 2, 3 );