var promise = require('bluebird'),
 	Boom = require("boom"),
 	UserModel = require('./../models/users'),
 	config = require('../../config'),
 	uuid = require('node-uuid');

/**
*
* @function
* @param : 
* description : will list down all the users
**/ 

var showAll = function(req, reply) {
    //reply.file('hello.html');
	var perPage = config.pagination.perPage,
		page =  0,
	    search_string =  (req.query.search) ? req.query.search : '';

	search_string =  new RegExp(search_string);

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
	var UserObject = {};	

	if (req.payload.username) {
		UserObject.username = req.payload.username;
	}

	if (req.payload.email) {
		UserObject.email = req.payload.email;
	}

	if (req.payload.password) {
		UserObject.password = (req.payload.password); 
	}

	if (req.payload.name) {
		UserObject.name = req.payload.name;	
	}

	var User = UserModel(UserObject);
	
	User.save(function(err, saved) {			
		if( err || !saved ) {			
			reply(Boom.badImplementation(err));
		} else {
			reply({"success": "success", data: User});						
		}
	});
	   
};


module.exports = {
	showAll : showAll, 
	addUser : addUser
};
