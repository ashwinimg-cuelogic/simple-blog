angular.module('app', ['restangular','ui.router'])

//setting data for restangular
.config(["RestangularProvider", function(RestangularProvider){
    RestangularProvider.setRestangularFields({
        id: "_id"
    });
    //  set the base url for restangular api calls
    RestangularProvider.setBaseUrl("http://localhost:3000/")

    //one can even set the api-key which is sent in every request
    //RestangularProvider.setDefaultRequestParams({ apiKey: '4f847ad3e4b08a2eed5f3b54' });

    //RestangularProvider.addRequestInterceptor(function(elem, operation, what) {
    //
    //    if (operation === 'put') {
    //        elem._id = undefined;
    //        return elem;
    //    }
    //    return elem;
    //})

    RestangularProvider.setResponseExtractor(function(response, operation) {
        return typeof(response.data !== "undefined") ? response.data : response[0].data;
    });

}])