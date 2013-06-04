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