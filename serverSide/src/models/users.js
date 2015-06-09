var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


//create a model defining the schema
var userSchema = new Schema({
	name : {
		type:String,
		required:true
	},
	address : String,
	phone_number : {
		type:Number,
		length:10
	},
	username :  {
		type:String,
		required:true,
		trim :true,
        unique: true,
	},
	email:  {
		type:String,
		required:true,
		unique: true,
		validate: [validateEmail, 'Please fill a valid email address'],
       	match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password :  {
		type:String,
		required:true
	},
	api_token : String,
	profile_pic: String,
	created_at: Date,
 	updated_at: Date
}, { versionKey: false });


var User = mongoose.model('users', userSchema);


var unique_mail = function(email) {
	User.findOne({email : email}, 'email', function(err, results) {
		if (err) {
			return false;
		} else if(results) {
			return false;
		} else {
			return true;
		}
	});
};

userSchema.pre('save', function(next) {	
  	var currentDate = new Date();	
	this.updated_at = currentDate;

 	// if created_at doesn't exist, add to that field
	if (!this.created_at) {
	    this.created_at = currentDate;
	}
	next();
});

User.on('index', function(err) {
  if (err) {   
    console.error(err);   
  }
});

module.exports = User;
