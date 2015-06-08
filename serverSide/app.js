var hapi = require("hapi");
var Path = require('path');
var config = require('./config');
var Db = require('./database');

var server = new hapi.Server();

var web = server.connection({
	port: 3000,
	routes : {
		validate:{
			options:{
				abortEarly:false
			}
		},
		files : {
			relativeTo : Path.join(__dirname, 'src/public/')
		},
		cors : true
		// cors : {
		// 	origin : ['http://localhost'] //list of Access-Control-Allow-Origin
		// }
	}
});


//register the plugins and stat the server in callback
server.register([
{
	register : require('hapi-router'),
	options : {
		routes : 'src/routes/*.js'
	}
}
], function (err) {
	if (err) {
		throw err;
	}
	server.start(function(){
		console.log("server is running at"+ server.info.uri);
	});
});

module.exports = server;

