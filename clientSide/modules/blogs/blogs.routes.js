(function(){	
	angular.module('app')
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	    //$urlRouterProvider.otherwise('/blogs');
	    $stateProvider
	    .state('blogs', {
	        url:'/blogs',
	        views :{
	            "parent" : {
	                templateUrl: '/modules/blogs/templates/blogs.html',
	                controller: 'blogCtrl'    
	            }
	        }	            
	    })
	    .state('blogs_info', {
	        url:'blogs/:blogId',
	        views :{
	            "parent" : {
	                templateUrl: '/modules/blogs/templates/blog-detail-view.html',
	                controller: 'blogDetailCtrl'    
	            }
	        }	            
	    })
	    .state('blogs_add', {
	        url:'/blogs/add',
	        views :{
	            "parent" : {
	                templateUrl: '/modules/blogs/templates/addBlog.html',
	                controller: 'blogActionCtrl'    
	            }
	        }	            
	    })		
	}]); 
})()