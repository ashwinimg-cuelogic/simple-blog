(function(){
    angular
    .module("app")
    .controller('blogAddCtrl', blogAddCtrl);

    blogAddCtrl.$inject = [
        '$scope', 
        'Restangular',
        '$stateParams',
        'BlogService'     
    ];   

    function blogAddCtrl($scope, Restangular, $stateParams, BlogService) {       
        //USING FACTORY        
        $scope.add = function(blog) {
            $scope.error = '';
            if (blog) {
                blog.user = "55754d12c2214ed2153ac413"; 
                console.log(blog);
                BlogService.post(blog).then(function(newResource){               
                    $scope.blogs.push(newResource.data);
                    $scope.blog = {};
                })
                .catch(function(err) {
                    $scope.error= err.data.message;
                }) 
            }
           
        }
       
    };
})();
