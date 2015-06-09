'use strict';

// import the moongoose helper utilities
var app = require('../../app');
var should = require('should');
var assert = require("assert");


var BlogModel = require('../../src/models/blogs');


describe('blogs: models', function () {

    describe('#create()', function () {
        it('should create a new blog', function (done) {

            var BlogObject = {};  
            BlogObject.subject = "test blog";    
            BlogObject.description = "test blog description";
            BlogObject.status = 'published';

            var Blog = BlogModel(BlogObject);

            Blog.save(function(err, createdBlog) {     
                // Confirm that that an error does not exist
                should.not.exist(err);

                // verify that the returned blog is what we expect
                createdBlog.subject.should.equal("test blog");
                createdBlog.description.should.equal("test blog description");
                createdBlog.status.should.equal('published');

                // Call done to tell mocha that we are done with this test
                done();
            });

        });
    });

    
    it('should return blogs', function (done) {
        BlogModel.find()
        .sort({created_at: 'desc'})
        .exec(function(err, blogs) {
            if (err || !blogs) {
               console.log(err)
            } else {              
                done()
            }
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