var angular = require('angular');
require('angular-router-browserify')(angular);

angular.module('app', [
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'list.html',
                controller: 'ListCtrl'
            })
            .when('/insert', {
                templateUrl: 'insert.html',
                controller: 'InsertCtrl'
            })
    })
    .service('Contacts', function() {
        var data = [];

        this.getData = function() {
            return data;
        }

        this.setData = function(_data) {
            return data = _data;
        }
    })
    .controller('ListCtrl', require('./list.ctrl'))
    .controller('InsertCtrl', require('./insert.ctrl'))
    .controller('AppCtrl', function($scope) {
        $scope.test = 'Hello from Angularjs';
    });