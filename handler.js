'use strict';

module.exports.hello = (event, context, callback) => {
	console.log(event);

	var message = 'HELLO WORLD';
	const name = event.queryStringParameters && event.queryStringParameters.name;

	if (name !== null) {
		message = 'Hello ' + name;
	}

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: message,
			input: event
		})
	};

	callback(null, response);
};

module.exports.moi = (event, context, callback) => {
	var message = 'HELLO WORLD';

	const name = event.pathParameters && event.pathParameters.name;

	if (name !== null) {
		message = 'Hello ' + name;
	}

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: message,
			input: event
		})
	};

	callback(null, response);
};

module.exports.hola = (event, context, callback) => {
	const body = JSON.parse(event.body);

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: body,
			input: event
		})
	};

	callback(null, response);
};
