describe('TodosCtrl', function () {
    var $scope = null,
        ctrl = null,
        now = null,
        $routeParams = null,
        $location = null,
        mockTodoResource = null,
        mockTodoData = null,
        mockTodoService = null;

    beforeEach(module('todos-app'));

    beforeEach(inject(function ($rootScope, $controller) {
        now = new Date();

        mockTodoData = [
            { id: "1", title: "Todo Title", description: "Description text", due: now, done: false }
        ];

        mockTodoResource = function () {
            this.$save = function (callback) {
            };
        };

        mockTodoResource.get = function (params) {
            mockTodoResource.lastGetParams = params;
        };

        spyOn(mockTodoResource, 'get').andCallThrough();

        mockTodoResource.query = function () {
            return mockTodoData;
        };

        spyOn(mockTodoResource, 'query').andCallThrough();

        mockTodoService = {
            Todo: mockTodoResource
        };

        $routeParams = { id: 123 };

        $location = {
            path: function (x) {
            }
        };

        spyOn($location, 'path').andCallThrough();

        $scope = $rootScope.$new();


        ctrl = $controller('TodoCtrl', {
            $scope: $scope,
            todoService: mockTodoService,
            $location: $location,
            $routeParams: $routeParams
        });
    }));

    it('should have a loadTodo function', function () {
        expect(angular.isFunction($scope.loadTodo)).toBe(true);
    });

    it('should have a saveTodo function', function () {
        expect(angular.isFunction($scope.saveTodo)).toBe(true);
    });

    it('should attempt to load the todo by id from $routeParams', function () {
        expect(mockTodoResource.lastGetParams.id).toEqual($routeParams.id);
    });

    it('should have loadTodo pull resource from service if id > 0', function () {
        $scope.loadTodo(1);
        expect(mockTodoResource.lastGetParams.id).toEqual(1);
        $scope.loadTodo(0);
        expect(mockTodoResource.lastGetParams.id).toEqual(1);
    });

});
