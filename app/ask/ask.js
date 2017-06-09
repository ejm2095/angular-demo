'use strict';

angular.module('myApp.ask', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ask', {
    templateUrl: 'ask/ask.html',
    controller: 'AskCtrl'
  });
}])

.controller('AskCtrl', [function() {

}]);