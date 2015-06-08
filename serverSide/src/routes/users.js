var usercontroller = require("./../controllers/users.js");
var Joi = require('joi');

module.exports = [
  {
    path: '/users',
    method: 'GET',
    config: {
      handler: usercontroller.showAll,
      validate: {
        query : {
           name : Joi.string().alphanum().min(3).max(7).optional(),
           search : Joi.string().alphanum().min(3).max(7).optional()
        }
       }      
    }    
  }  ,
  {
    path: '/users',
    method: 'POST',
    config: {
      handler: usercontroller.addUser,
      validate: {
        payload : {
           name : Joi.string().alphanum().min(3).max(7).required(),
           address : Joi.string().optional(),
           username : Joi.string().required(),
           email : Joi.string().email().required(),
           password : Joi.string().required()           
        }
      }      
    }    
  },
  
]