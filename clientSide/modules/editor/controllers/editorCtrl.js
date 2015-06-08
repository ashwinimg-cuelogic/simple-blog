(function(){
    angular
    .module("app")
    .controller('editorCtrl', editorCtrl);

    editorCtrl.$inject = [
        '$scope', 
        'Restangular',
        'BlogService'   
    ];   

    function editorCtrl($scope, Restangular, BlogService) {       
        //USING FACTORY 

        BlogService.getList().then(function(blogs){
            $scope.blogs = blogs[0].data ;                  
        })          
        .catch(function(err){
            console.log(err);
        }); 

        //delete blog
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
