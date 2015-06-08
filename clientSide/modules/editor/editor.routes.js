(function(){	
	angular.module('app')
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/blogs');
	    $stateProvider
	    .state('editordashboard', {
	        url:'/editor/dashboard',
	        views :{
	            "parent" : {
	                templateUrl: '/modules/editor/templates/editorDashboard.html',
	                controller: 'editorCtrl'    
	            }
	        }	            
	    })	       
	}]); 
})()