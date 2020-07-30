const request = require('request');
const args = process.argv.slice(2);
searchParam = args[0].substring(0, 4);

request(
	`https://api.thecatapi.co,/v1/breeds/search?q=${searchParam}`,
	(error, response, body) => {
		// handle request error
		if (error) {
			console.log(error);
			return;
		}

		const data = JSON.parse(body);

		// if requested breed not found
		if (data[0] && data[0].description) {
			return console.log(data[0].description);
		} else {
			return console.log('breed not found');
		}
	}
);

// > node breedFetcher.js Chartreux
// The Chartreux is generally silent but communicative. Sh...

// what would cause an error with the request?
// --> error is based on the request (say if i mistyped the url); not based on the returning value

// Write code to output an appropriate message if the requested breed is not found.

// Handle request errors and print the error details to the screen.
