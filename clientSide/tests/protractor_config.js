exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['*_test.js'],
	baseUrl : 'http://localhost:8080/'
};