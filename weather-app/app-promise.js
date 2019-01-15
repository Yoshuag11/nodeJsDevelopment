const yargs = require( 'yargs' );
const axios = require( 'axios' );

const geocode = require( './geocode/geocode' )
const weather = require( './weather/weather' );

const argv = yargs.
	options( {
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	} ).
	help().
	alias( 'help', 'h' ).
	argv;

const encodedAddress = encodeURIComponent( argv.a );
const darkSkyKey = '9183959c4b8abf9c9414133bafc573e0';
const geocodeKey = 'AIzaSyBYfZdoWw-HmWCTRyDa1hLZBNjfrvY-ZzE';
const geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?' +
	`address=${ encodedAddress }&key=${ geocodeKey }`;

axios.get( geocodeUrl ).
	then( response => {
		if ( response.data.status === 'ZERO_RESULTS' ) {
			throw Error( 'Unable to find that address.' );
		}

		console.log( response.data.results[ 0 ].formatted_address );

		return ( loc => {
			const lat = loc.lat;
			const lng = loc.lng;
			const weatherUrl =
				`https://api.darksky.net/forecast/${ darkSkyKey }/${ lat },${ lng }`;

			return axios.get( weatherUrl );
		} )( response.data.results[ 0 ].geometry.location );
	} ).
	then( response => {
		( data => {
			const temperature = data.temperature;
			const apparentTemperature = data.apparentTemperature;

			console.log(
				`It's currently ${ temperature }. It feels like ${ apparentTemperature }` );
		} )( response.data.currently );
	} ).
	catch( e => {
		if ( e.code === 'ENOTFOUND' ) {
			console.log( 'Unable to connect to API servers.' );
		} else {
			console.log( e.message );
		}
	} );