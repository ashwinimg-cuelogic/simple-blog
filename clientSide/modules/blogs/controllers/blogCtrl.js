(function(){
    angular
    .module("app")
    .controller('blogCtrl', blogCtrl);

    blogCtrl.$inject = [
        '$scope', 
        'Restangular',
        'BlogService'     
    ];   

    function blogCtrl($scope, Restangular, BlogService) {      
      
        BlogService.getList().then(function(blogs){
            $scope.blogs = blogs[0].data;        
        })          
        .catch(function(err){
            console.log(err);
        });  
        
    };
})();
