var mongoose = require('mongoose');
var Boom = require("boom");
var BlogModel = require('./../models/blogs');

var showAll = function(req, reply) {
	var perPage = 10, page =  0;	
	var search_string =  (req.query.search) ? req.query.search : '';
	search_string = new RegExp(search_string);	
	BlogModel.find({
		$and :[
			{$or : [
				{subject:search_string},
				{content:search_string}
			]}
		]		
	})
	.limit(perPage)
	.skip(perPage * page)
	.sort({created_at: 'desc'})
	.exec(function(err, blogs) {
		if (err || !blogs) {
			reply(err);
		} else {
			// populate the user path of the data
			BlogModel.populate(blogs, {path:'user'}, function(err, blogs){
				data = [{"success": "success", data: blogs }];	
			reply(data);
			});				
		}	
	});   
};


var addBlog = function(req, reply) {
	var newBlogObject = {};
	if (req.payload.subject){
		newBlogObject.subject = req.payload.subject;
	}

	if (req.payload.description) {
		newBlogObject.description = req.payload.description;
	}

	if (req.payload.status) {
		newBlogObject.status = req.payload.status;
	}

	if (req.payload.user) {
		newBlogObject.user = req.payload.user;	
	}

	var newBlog = BlogModel(newBlogObject);

	newBlog.save(function(err, saved) {			
		if( err || !saved ) {			
			reply(Boom.badImplementation(err));
		} else {
			reply({"success": "success", data: newBlog});						
		}
	});
};


var getBlogById = function(req, reply) {		
	BlogModel.findById(req.params.blogId, function(err, blog) {
		if (err) {
			reply(Boom.badImplementation(err));
		} else {
			// populate the user path of the data
			BlogModel.populate(blog, {path:'user'}, function(err, blog){
				data = [{"success": "success", data: blog }];	
				reply(data);
			});	
		}	
	});   
};



module.exports = {
	showAll    : showAll,
	addBlog    : addBlog,
	getBlogById: getBlogById
};
