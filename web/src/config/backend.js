const server = {
	protocol: 'http://',
	host: 'localhost',
	port: ':3000',
	base: '/api'
};

const endpoints = {
	user: {
		login: '/users/login'
	}
}

let href = () => server.protocol + server.host + server.port + server.base;

module.exports = {
		login: href() + endpoints.user.login
}
