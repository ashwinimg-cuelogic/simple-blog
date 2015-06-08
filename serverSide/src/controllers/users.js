var promise = require('bluebird');
var Boom = require("boom");
var UserModel = require('./../models/users');
var fs = require('fs');


// node uuid token generator and parser
var uuid = require('node-uuid');

var showAll = function(req, reply) {
	var perPage = 10, page =  0;	
	var search_string =  (req.query.search) ? req.query.search : '';
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


module.exports = {
	showAll : showAll
};
