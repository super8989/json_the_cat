const request = require('request');

request(
	'https://api.thecatapi.com/v1/breeds/search?q=sib',
	(error, response, body) => {
		const data = JSON.parse(body);
		console.log(typeof data);
		console.log(data[0].description);
	}
);
