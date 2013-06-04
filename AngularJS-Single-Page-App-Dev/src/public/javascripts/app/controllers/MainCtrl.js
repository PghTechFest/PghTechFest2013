//MainCtrl.js
angular.module('techfest')
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.$on('$locationChangeSuccess', function() {
            $scope.path = $location.path();
        });
    }]);