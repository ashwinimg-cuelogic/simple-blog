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
        BlogService.getList().then(function(blogs){
            $scope.blogs = blogs[0].data ;        
        })          
        .catch(function(err){
            console.log(err);
        });  

        alert("inside the blogs");

        $scope.add = add;

        var add = function(blog) {
            alert("inside teh add blog");
            alert(blog);
        };
    };
})();
