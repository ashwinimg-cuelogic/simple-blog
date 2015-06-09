describe('simple-blog App', function() {

	beforeEach(function() {
    	browser.get(browser.baseUrl+'#/editor/dashboard');
  	});

	it('should have a title', function() {		
		expect(browser.getTitle()).toEqual('Sample blog');
	});

	it('links should work and redirect to current page', function() {  
			
		element(by.id('home')).click();
		expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"#/blogs");

		element(by.id('editor-dashboard')).click();
		expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"#/editor/dashboard");

	});

	it('each blog link should work properly. by taking it to detailed view of the blog', function() {
		random_blog = element.all(by.css('.post-preview a')).get(5);
		href_link = random_blog.getAttribute('href');
		random_blog.click();
		expect(browser.getCurrentUrl()).toEqual(href_link);
	});

	it("add blog page should redirect to addBlog page", function() {
		element(by.id('add-blog')).click();
		expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"#/blogs/add");
	});


	it('delete blog should delete the blog from the view', function() {
		initial_count = element.all(by.css('.post-preview .delete-blog')).count();		
		random_blog = element.all(by.css('.post-preview .delete-blog')).get(1);
		random_blog.click();
		count_after_deletion = element.all(by.css('.post-preview .delete-blog')).count();
		
		expect(initial_count).not.toEqual(count_after_deletion);
	});
});