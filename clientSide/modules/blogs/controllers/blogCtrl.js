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
        //USING FACTORY
        BlogService.getList({status:'published'}).then(function(blogs){
            $scope.blogs = blogs[0].data ;        
        })          
        .catch(function(err){
            console.log(err);
        });  
        
    };
})();
