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

    };

})();
