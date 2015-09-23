angular.module('demoApp', ['ngRoute'])

    .controller('MainCtrl', function ($scope, $route, $routeParams, $location) {

    }).controller('ContactCtrl',['$scope', function ($scope, $routeParams) {

        $scope.contact_list = [];
        $scope.contact_list.push({email: "twiegand@rogers.com", pswd: "secret"});

        $scope.addContact = function (msg) {
            $scope.contact_list.push({email: $scope.email, pswd: $scope.pswd});
        }
    }]).config(function ($routeProvider, $locationProvider) {
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
    });

