# Simple yet elegant blog exercise
 creating simple blog system using following technologies:
 1. angular - for the user interface
 	- used restangular to connect with the API written in nodejs
 	- used angular-ui-router to maintain state driven routing
 	- used services 
 2. nodejs - for the API (providing backend support)
	- written API in nodejs to handle all database related operation
	- using mongoDB for storing the data
	- used  mocha for tests


As a guest user can do the following:
  1. listing of the blogs 
  2. On clicking the blogs can see the details of the blog


As an editor user can do the following:
 1. listing of the blogs 
 2. On clicking the blogs can see the details of the blog
 3. create new blog:
 	after creating the blog editor will be redirected to the blogs post having recent post on the top.
 4. search among the blogs
 5. delete blog (only status changes to deleted)


 