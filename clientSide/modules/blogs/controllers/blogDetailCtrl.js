(function(){
    angular
    .module("app")
    .controller('blogDetailCtrl', blogDetailCtrl);

    blogDetailCtrl.$inject = [
        '$scope', 
        'Restangular',
        '$stateParams',
        'BlogService'     
    ];   

    function blogDetailCtrl($scope, Restangular, $stateParams, BlogService) {       
        //USING FACTORY
        var blogId = ($stateParams.blogId) ? $stateParams.blogId : 0;

        if (blogId) {
            BlogService
            .one(blogId)
            .get()
            .then(function(blog) {
                $scope.blog = blog[0].data ;        
            })          
            .catch(function(err){
                console.log(err);
            });   
        }       
    };
})();
