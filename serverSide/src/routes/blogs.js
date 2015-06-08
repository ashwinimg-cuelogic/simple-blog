var blogController = require("./../controllers/blogs.js");
var Joi = require('joi');

module.exports = [
  {
    path: '/blogs',
    method: 'GET',
    config: {
      handler: blogController.showAll,
      validate: {
        query : {
           name : Joi.string().alphanum().min(3).max(7).optional(),
           search : Joi.string().alphanum().min(3).max(7).optional()
        }
       }      
    }    
  },
  {
    path: '/blogs',
    method: 'POST',
    config: {
      handler: blogController.addBlog,
      validate: {
        payload : {
          subject : Joi.string().min(3).max(100).required(),
          description : Joi.string().min(3).max(200).required(),
          status : Joi.string().alphanum().min(3).max(10).optional(),
          user : Joi.string().optional()
        }
       }      
    }    
  },
  {
    path: '/blogs/{blogId}',
    method: 'GET',
    config: {
      handler: blogController.getBlogById,
      description: 'Get blog details',
      notes: 'Returns blog details'
    }  
  },
  
]