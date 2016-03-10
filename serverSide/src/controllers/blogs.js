var mongoose = require('mongoose');
	Boom = require("boom"),
	BlogModel = require('./../models/blogs'),
	config = require('../../config');

var showAll = function(req, reply) {
	var perPage = config.pagination.perPage, 
		page =  0,
	 	search_string =  (req.query.search) ? req.query.search : '';
	
	search_string = new RegExp(search_string);	

	BlogModel.find({
		$and :[
			{status : 'published'},
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
	var BlogObject = {};
	if (req.payload.subject){
		BlogObject.subject = req.payload.subject;
	}

	if (req.payload.description) {
		BlogObject.description = req.payload.description;
	}

	if (req.payload.status) {
		BlogObject.status = req.payload.status;
	} else {
		BlogObject.status = 'published';
	}

	if (req.payload.user) {
		BlogObject.user = req.payload.user;	
	}

	var Blog = BlogModel(BlogObject);

	Blog.save(function(err, saved) {			
		if( err || !saved ) {			
			reply(Boom.badImplementation(err));
		} else {
			reply([{"success": "success", data: Blog}]);
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


var updateBlog = function(req, reply) {
	BlogModel.findByIdAndUpdate(req.params.blogId, {$set: req.payload}, function(err, blog) {
		if(err) {
			reply(Boom.badImplementation(err));
		} else {
			reply([{"success": "success", data: "blog:"+ blog.status+" successfully deleted"}]);
		}		
    });
}


module.exports = {
	showAll    : showAll,
	addBlog    : addBlog,
	getBlogById: getBlogById,
	updateBlog : updateBlog
};
