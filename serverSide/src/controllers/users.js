var promise = require('bluebird'),
 	Boom = require("boom"),
 	UserModel = require('./../models/users');
 	config = require('../../config');

// node uuid token generator and parser
var uuid = require('node-uuid');

var showAll = function(req, reply) {
	var perPage = config.pagination.perPage,
		page =  0,	
	    search_string =  (req.query.search) ? req.query.search : '';
	search_string = new RegExp(search_string);	
	UserModel.find({
		$and :[
			{$or : [
				{name:search_string},
				{email:search_string},
				{username:search_string}
			]}
		]		
	})
	.limit(perPage)
	.skip(perPage * page)
	.sort({name: 'asc'})
	.exec(function(err, users) {
		if (err || !users) {
			reply(err);
		} else {
			data = [{"success": "success", data: users }];	
			reply(data);
		}	
	});   
}


/**
*
* @function
* @param : 
* note : encryption mechanism can be added in future by modifying the newUserObject.password field
**/ 

var addUser = function(req, reply) {	
	var newUserObject = {};	

	if (req.payload.username) {
		newUserObject.username = req.payload.username;
	}		
	if (req.payload.email) {
		newUserObject.email = req.payload.email;
	}
	if (req.payload.password) {
		newUserObject.password = (req.payload.password); 

	}
	if (req.payload.name) {
		newUserObject.name = req.payload.name;	
	}

	var newUser = UserModel(newUserObject);
	
	newUser.save(function(err, saved) {			
		if( err || !saved ) {			
			reply(Boom.badImplementation(err));
		} else {
			reply({"success": "success", data: newUser});						
		}
	});
	   
};


module.exports = {
	showAll : showAll, 
	addUser : addUser
};
