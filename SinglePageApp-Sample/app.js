var app = angular.module('demoApp', ['ngRoute']);

app.controller('MainCtrl', function ($scope, $route, $routeParams, $location) {
});

app.controller('ContactCtrl', function ($scope, $routeParams) {
    this.contact_list = contacts;
    this.addContact = function (msg) {
        this.contact_list.push({email: this.email, pswd: this.pswd});
    }
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/contact-us', {
            templateUrl: 'contact-us.html',
            controller: 'ContactCtrl'
        });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});

var contacts = [];