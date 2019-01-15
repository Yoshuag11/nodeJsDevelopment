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