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
  }
  
]