(function(){
    angular
    .module("app")
    .controller('blogCtrl', blogCtrl);

    blogCtrl.$inject = [
        '$scope',
        'BlogService'     
    ];   

    function blogCtrl($scope, BlogService) {
      
        BlogService.getList().then(function(blogs){
            $scope.blogs = blogs;
        })          
        .catch(function(err){
            console.log(err);
        });  
        
    };
})();
