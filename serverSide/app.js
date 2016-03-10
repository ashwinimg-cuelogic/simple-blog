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
	}
});


//register the plugins and stat the server in callback
server.register([
{
	register : require('hapi-router'),
	options : {
		routes : 'src/routes/*.js'
	}
},
{
    register: require('good'),
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }

}], function (err) {
	if (err) {
		throw err;
	}
	server.start(function(){
		server.log("server is running at"+ server.info.uri);
        server.log('info', 'Server running at: ' + server.info.uri);
	});
});

module.exports = server;

