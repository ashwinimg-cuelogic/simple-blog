var blogController = require("./../controllers/blogs.js");
var Joi = require('joi');

module.exports = [
  {
    path: '/blogs',
    method: 'GET',
    config: {
      handler: function(req, reply) {
          reply("this is the samepl blog page.")
      },
      validate: {
        query : {
           name : Joi.string().alphanum().min(3).max(7).optional(),
           search : Joi.string().alphanum().min(3).max(7).optional()
        }
       }      
    }    
  }
  
]