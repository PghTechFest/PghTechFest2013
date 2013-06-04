describe('TodosCtrl', function () {

    //initialize
    var $scope = null,
        ctrl = null,
        mockTodoResource = null,
        mockTodoService = null;


    //wire up the module you're going to be testing.
    beforeEach(module('todos-app'));

    //before each test, set up all of your mocks,
    //load your controller, and execute it on a new Scope.
    beforeEach(inject(function ($rootScope, $controller) {
        //a simple mocked $resource.
        mockTodoResource = function () {
            this.$save = function (callback) {
            };
        };

        //a query function that will be spied on and called.
        mockTodoResource.query = function () {
        };

        //let jasmine know you're spying on this function.
        spyOn(mockTodoResource, 'query').andCallThrough();

        //a service to inject that exposes our mock resource.
        mockTodoService = {
            Todo: mockTodoResource
        };

        //create a new scope.
        $scope = $rootScope.$new();

        //call the controller function, injecting our $scope and mocks.
        ctrl = $controller('TodosCtrl', {
            $scope: $scope,
            todoService: mockTodoService
        });
    }));

    it('should set up loadTodos', function () {
        expect(angular.isFunction($scope.loadTodos)).toBe(true);
    });

    it('should call loadTodos initially', function () {
        expect(mockTodoResource.query).toHaveBeenCalled();
    });

    it('should implement a changeStatus function', function () {
        expect(angular.isFunction($scope.changeStatus)).toEqual(true);
    });

    it('should have changeStatus change the status of a todo', function () {
        var todo = new mockTodoResource();
        todo.done = false;
        spyOn(todo, '$save').andCallThrough();
        $scope.todos = [ todo ];

        $scope.changeStatus(todo);

        expect(todo.done).toEqual(true);
        expect(todo.$save).toHaveBeenCalled();
    });

});
