const request = require( 'request' );

const darkSkyKey = '9183959c4b8abf9c9414133bafc573e0';
const getWeather = ( lat, lng, callback ) => {
	request( {
		url: `https://api.darksky.net/forecast/${ darkSkyKey }/${ lat },${ lng }`,
		json: true
	}, ( error, response, body ) => {
		if ( error ) {
			callback( 'Unable to connect to Forecast.io server.' )
		} else if ( response.statusCode === 400 ) {
			callback( 'Unable to fetch the weather.' )
		} else if ( response.statusCode === 200 ) {
			callback( undefined, {
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature
				} );
		}
	} );
};

module.exports.getWeather = getWeather;