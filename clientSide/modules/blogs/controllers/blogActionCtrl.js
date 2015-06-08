(function(){
    angular
    .module("app")
    .controller('blogActionCtrl', blogActionCtrl);

    blogActionCtrl.$inject = [
        '$scope', 
        'Restangular',
        '$stateParams',
        'BlogService'     
    ];   

    function blogActionCtrl($scope, Restangular, $stateParams, BlogService) {       
        //USING FACTORY

        $scope.add = function() {
            alert("add the blog");
        }
       
    };
})();
