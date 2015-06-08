var mongoose = require('mongoose'),
 	Schema   = mongoose.Schema;

//create a model defining the schema

var blogSchema = new Schema({
	subject : {
		type:String,
		required:true
	},
	description : {
		type:String,
		required:true
	},
	status : {
		type: String,
		enum : ['draft', 'published', 'deleted']
	},
	user : {
		type : Schema.ObjectId,
		ref : 'users'
	},
	created_at: Date,	
 	updated_at: Date 
});

blogSchema.pre('save', function(next) {		
  	var currentDate = new Date();
	this.updated_at = currentDate;
	if (!this.created_at) {
	    this.created_at = currentDate;
	}  
	next();
});

var Blog = mongoose.model('blogs', blogSchema);
module.exports = Blog;
