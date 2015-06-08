/**
* Blogs Service
* @namespace services
* @desc restangular service
*/

(function() {
	angular.module('app')
	.factory("BlogService", function(Restangular){
		return Restangular.service('blogs');
	});
})();