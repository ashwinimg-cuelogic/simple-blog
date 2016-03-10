(function(){
    angular
    .module("app")
    .controller('blogDetailCtrl', blogDetailCtrl);

    blogDetailCtrl.$inject = [
        '$scope',
        '$stateParams',
        'BlogService'     
    ];   

    function blogDetailCtrl($scope, $stateParams, BlogService) {
        
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
