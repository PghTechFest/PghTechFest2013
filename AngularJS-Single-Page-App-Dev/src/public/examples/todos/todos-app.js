// create our application module
// reference the angular-resource module.
var app = angular.module('todos-app', ['ngResource']);

// configure the routes.
app.config(function ($routeProvider) {
    $routeProvider
        // route for the detail view.
        .when('/todo/:id', {
            controller: 'TodoCtrl',
            templateUrl: '/examples/todos/todos-detail.html'
        })

        //default all other routes to the list.
        .otherwise({
            controller: 'TodosCtrl',
            templateUrl: '/examples/todos/todos-list.html'
        });
});

// An injectible service for Todos.
app.factory('todoService', function ($resource) {
    return {
        //a REST resource for Todos.
        Todo: $resource('/todos/:id', { id: '@id' })
    };
});

//controller for a todo detail page.
app.controller('TodoCtrl', function ($scope, $routeParams, $location, todoService) {
    $scope.loadTodo = function (id){
        if (id > 0) {
            //editing.
            $scope.title = 'Editing Todo';
            $scope.todo = todoService.Todo.get({ id: id });
        } else {
            //adding
            $scope.title = 'Adding Todo';
            $scope.todo = new todoService.Todo();
        }
    };

    $scope.loadTodo($routeParams.id);

    // a scope method for saving the item you're currently editting or adding.
    $scope.saveTodo = function () {
        $scope.todo.$save(function () {
            $location.path('/');
        });
    }
});

// controller for the default items list.
app.controller('TodosCtrl', function ($scope, todoService) {

    //a scope method for loading current items.
    $scope.loadTodos = function (){

        // Here there's a bit of Angular magic.
        // query() actually returns a promise that you could
        // set up a callback with then. But since the promise is a
        // promise from Angular, it's smart enough to return the
        // resolved value when the promise resolves and update the scope.
        // Leaving one, nice clean line of code.
        $scope.todos = todoService.Todo.query();
    };

    //load the todos.
    $scope.loadTodos();

    // When an item is checked or unchecked, persist the
    // "Done" information to the database.
    $scope.changeStatus = function (todo){
        todo.done = !todo.done;
        todo.$save(function() {
            $scope.loadTodos();
        });
    };
});