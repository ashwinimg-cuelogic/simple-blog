(function(){
    angular
    .module("app")
    .controller('blogAddCtrl', blogAddCtrl);

    blogAddCtrl.$inject = [
        '$scope', 
        '$state',
        '$stateParams',
        'BlogService'     
    ];   

    function blogAddCtrl($scope, $state, $stateParams, BlogService) {
             
        $scope.add = function(blog) {
            $scope.error = '';
            if (blog) {
                blog.user = "55754d12c2214ed2153ac413"; 
                
                BlogService.post(blog).then(function(newResource){               
                   $scope.blog = {};
                   $state.go('editordashboard');
                })
                .catch(function(err) {
                    $scope.error= err.data.message;
                }) 
            }
           
        }
       
    };
})();
