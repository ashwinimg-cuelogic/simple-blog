(function(){
    angular
    .module("app")
    .controller('editorCtrl', editorCtrl);

    editorCtrl.$inject = [
        '$scope',
        'BlogService'   
    ];   

    function editorCtrl($scope, BlogService) {

        BlogService.getList().then(function(blogs){
            $scope.blogs = blogs ;
        })          
        .catch(function(err){
            console.log(err);
        }); 

        $scope.delete = function(blog) {
            blog.status = 'deleted';
            $scope.error = '';
            var account = Restangular.allUrl("blogs/"+blog._id)
            .customPUT(blog)            
            .then(function(){
                var whatIndex = null;
                angular.forEach($scope.blogs, function(cb, index) {
                  if (cb._id === blog._id) {
                     whatIndex = index;
                  }
                });
                $scope.error= blog.subject+" is successfully deleted.";
                delete $scope.blogs.splice(whatIndex, 1);
            });
        }
    };

})();
