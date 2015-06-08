angular.module('app', ['restangular','ui.router'])

//setting data for restangular
.config(["RestangularProvider", function(RestangularProvider){
    RestangularProvider.setRestangularFields({
        id: "_id"
    });
    //  set the base url for restangular api calls
    RestangularProvider.setBaseUrl("http://localhost:3000/")
}])