/**
 * Created by Vovan on 27.10.2016.
 */

app.directive('main',function factory(){
    return {
        restrict: 'E',
        templateUrl: '/../../template/main.html',
        controller: function(){},
        controllerAs: 'mainCtrl',
        scope: {
            main: '='
        }
    };
});

app.directive('home',function factory(){
    return {
        restrict: 'E',
        templateUrl: '/../../template/home.html',
        controller: function(){},
        controllerAs: 'homeCtrl',
        scope: {
            main: '='
        }
    };
});

app.directive('about', function factory(){
    return {
        restrict: 'E',
        templateUrl: '/../../template/about.html',
        controller: function(){},
        controllerAs: 'aboutCtrl',
        scope: {
            about: '='
        }
    }
});

app.directive('works', function factory(){
    return {
        restrict: 'E',
        templateUrl: '/../../template/works.html',
        controller: function(){},
        controllerAs: 'worksCtrl',
        scope: {
            works: '='
        }
    }
});

app.directive('presents', function factory(){
    return {
        restrict: 'E',
        templateUrl: '/../../template/presents.html',
        controller: function(){},
        controllerAs: 'presentsCtrl',
        scope: {
            presents: '='
        }
    }
});

app.directive('blog', function factory(){
    return {
        restrict: 'E',
        templateUrl: '/../../template/blog.html',
        controller: function(){},
        controllerAs: 'blogCtrl',
        scope: {
            blog: '='
        }
    }
});

app.directive('contact', function factory(){
    return {
        restrict: 'E',
        templateUrl: '/../../template/contact.html',
        controller: function(){},
        controllerAs: 'contactCtrl',
        scope: {
            blog: '='
        }
    }
});