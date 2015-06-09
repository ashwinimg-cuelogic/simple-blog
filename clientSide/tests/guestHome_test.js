describe('simple-blog App', function() {

	beforeEach(function() {
    	browser.get(browser.baseUrl+'#/blogs');
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
});