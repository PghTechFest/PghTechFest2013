// Defining an empty controller that I'm going to use with
// some of the routed pages that have no real business logic to them.
// this is a bit of a hack, but it's to save me time.
angular.module('techfest')
.controller('EmptyCtrl', ['$scope', function($scope) {
    }]);