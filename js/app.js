/**
 * Created by Vovan on 27.10.2016.
 */
var app = angular.module("artWebSite", ['ui.router']);


app.controller('urlCtrl', function(){
//..................................
});

app.run([
    '$rootScope', '$state', '$location',
    function ($rootScope, $state, $stateParams, SessionService) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$viewContentLoading',
            function(event, viewConfig){
                $rootScope.currentPath = $stateParams.path();
                console.log($stateParams.path());
            });
    }
]);

