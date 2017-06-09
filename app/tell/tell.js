'use strict';

angular.module('myApp.tell', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/tell', {
        templateUrl: 'tell/tell.html',
        controller: 'TellCtrl'
    });
}])

.controller('TellCtrl', [function() {

}]);