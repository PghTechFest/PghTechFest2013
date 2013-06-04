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