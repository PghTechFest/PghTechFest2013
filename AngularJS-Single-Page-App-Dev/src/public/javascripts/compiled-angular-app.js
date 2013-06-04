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
// Defining an empty controller that I'm going to use with
// some of the routed pages that have no real business logic to them.
// this is a bit of a hack, but it's to save me time.
angular.module('techfest')
.controller('EmptyCtrl', ['$scope', function($scope) {
    }]);
//MainCtrl.js
angular.module('techfest')
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.$on('$locationChangeSuccess', function() {
            $scope.path = $location.path();
        });
    }]);
angular.module('techfest')
    .directive('codeExample', function () {
        return {
            restrict: 'E',
            priority: 1000,
            templateUrl: 'templates/directives/codeExample.html',
            scope: {
                src: '@',
                resultHeight: '@'
            } ,
            link: function(scope, elem, attrs) {
            }
        };
    });
//loadCode.js
angular.module('techfest')
    .directive('loadCode', ['$http', '$window', function ($http, $window) {
        return {
            link: function (scope, elem, attrs) {
                scope.$watch(function () {
                    return attrs.loadCode;
                }, function (url) {
                    $http.get(url).then(function (code) {
                        elem.text(code.data);

                        // prettyPrint needs to wait for the text in the elements to be processed
                        // before it will work properly with line numbers.
                        setTimeout(function () {
                            $window.prettyPrint && $window.prettyPrint();
                        }, 100);
                    });
                });
            }
        };
    }]);