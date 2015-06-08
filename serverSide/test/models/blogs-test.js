'use strict';

// import the moongoose helper utilities
var app = require('../../app');
var should = require('should');
var supertest = require("supertest");
var assert = require("assert");


// import our User mongoose model
var BlogModel = require('../../src/models/blogs');


describe('blogs: models', function () {

    describe('#create()', function () {
        it('should create a new blog', function (done) {
            // Create a User object to pass to User.create()

            var newBlogObject = {};  
            newBlogObject.subject = "test blog";    
            newBlogObject.description = "test blog description";
            newBlogObject.status = 'published';

            var newBlog = BlogModel(newBlogObject);

            newBlog.save(function(err, createdBlog) {     
                // Confirm that that an error does not exist
                should.not.exist(err);
                // verify that the returned user is what we expect
                createdBlog.subject.should.equal("test blog");
                createdBlog.description.should.equal("test blog description");
                createdBlog.status.should.equal('published');
                // Call done to tell mocha that we are done with this test
                done();
            });

        });
    });

});



describe('throw test', function(){
  it("should throw and error", function(done) {
    function isPositive(n) {
    if(n <= 0) throw new Error('Given number is not positive')
    }

    isPositive.bind(null, 10).should.not.throw();
    isPositive.bind(null, -10).should.throw();
    done();
  })
})