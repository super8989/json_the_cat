const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
	request(
		`https://api.thecatapi.com/v1/breeds/search?q=${breedName[0]}`,
		(error, response, body) => {
			// handle request error
			if (error) {
				callback(error, null);
			}

			const data = JSON.parse(body);

			// if requested breed not found
			if (data[0] && data[0].description) {
				callback(null, data[0].description);
			} else {
				callback(error, null);
			}
		}
	);
};

console.log('continued...');

module.exports = { fetchBreedDescription };

// > node breedFetcher.js Chartreux
// The Chartreux is generally silent but communicative. Sh...

// what would cause an error with the request?
// --> error is based on the request (say if i mistyped the url); not based on the returning value

// Write code to output an appropriate message if the requested breed is not found.

// Handle request errors and print the error details to the screen.
