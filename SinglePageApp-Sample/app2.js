angular.module('demoApp', ['ngRoute'])

    .controller('MainCtrl',['$scope', '$route', '$routeParams', '$location',
        function ($scope, $route, $routeParams, $location) {

        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

    }]).controller('ContactCtrl',['$scope','$routeParams', function ($scope, $routeParams) {

        $scope.params = $routeParams;

        $scope.contact_list = [];
        $scope.contact_list.push({email: "twiegand@rogers.com", pswd: "secret"});

        $scope.addContact = function (msg) {
            $scope.contact_list.push({email: $scope.email, pswd: $scope.pswd});
        }
    }]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html'
            })
            .when('/contact-us2', {
                templateUrl: 'contact-us2.html',
                controller: 'ContactCtrl'
            });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

