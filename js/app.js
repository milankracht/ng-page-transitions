var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================

myApp.config(function($routeProvider) {

    $routeProvider

        .when('/page1', {
            templateUrl: 'views/page1.html',
            controller: 'pageController'
        })

        .when('/page2', {
            templateUrl: 'views/page2.html',
            controller: 'pageController'
        })

        .when('/page3', {
            templateUrl: 'views/page3.html',
            controller: 'pageController'
        })

        .when('/page4', {
            templateUrl: 'views/page4.html',
            controller: 'pageController'
        })

        .when('/page5', {
            templateUrl: 'views/page5.html',
            controller: 'pageController'
        })

        .otherwise({
            redirectTo: '/page1'   
        });

});

myApp.controller('pageController', function($rootScope, $location) {
    
});

myApp.run(function($rootScope, $location) {

    $rootScope.toPage = function(pageNumber) {  
        
        var currentPageNumber = $location.path().substr(-1, 1);

        if (currentPageNumber < pageNumber) {
            $rootScope.slide = 'slide-left'; 
        } else {
            $rootScope.slide = 'slide-right'; 
        }

        $location.path('/page' + pageNumber);
    }
});
