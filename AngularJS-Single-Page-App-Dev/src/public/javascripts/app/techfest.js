// This is the main application module for this entire
// site, which is a single page application about making single page
// applications.
angular.module('techfest', [])
    .config(['$routeProvider', function ($routeProvider) {

        //configure routes.
        $routeProvider
            .when('/basics', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/basics.html'
            })
            .when('/controllers', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/controllers.html'
            })
            .when('/directives', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/directives.html'
            })
            .when('/services', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/services.html'
            })
            .when('/filters', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/filters.html'
            })
            .when('/routing', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/routing.html'
            })
            .when('/validation', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/validation.html'
            })
            .when('/todos', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/todos.html'
            })
            .when('/unittesting', {
                controller: 'EmptyCtrl',
                templateUrl: 'templates/unittesting.html'
            })

            //this is the default route.
            .otherwise({
                controller: 'EmptyCtrl',
                templateUrl: 'templates/home.html'
            })
    }]);