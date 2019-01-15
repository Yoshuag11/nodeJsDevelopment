const getUser = ( id, callback ) => {
	const user = {
		id,
		name: 'Vikram'
	};
	setTimeout( callback, 3000, user );
};

getUser( 31, ( user ) => {
	console.log( user );
} );