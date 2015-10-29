const private_object = {
	protocol: 'http://',
	host: 'localhost',
	port: ':3000',
	base: '/api'
};

const backend = private_object.protocol + private_object.host + private_object.port + private_object.base;

module.exports = {
	URL: {
		login: backend + '/Users/login'
	}
}

