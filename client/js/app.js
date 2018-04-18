un_app = angular.module('un_app', ['ngRoute', 'ngMaterial'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: '/partials/home.html',
        controller: 'homeCtrl'
      })
        .when('/sign_in', {
        templateUrl: '/partials/sign_in.html',
        controller: 'signInCtrl'
      })
        .when('/sign_up', {
        templateUrl: '/partials/sign_up.html',
        controller: 'signUpCtrl'
    })
        .otherwise({
        redirectTo: '/home'
      });
  })
.controller('newController', function($rootScope, $scope, $timeout, $mdSidenav, $location){
     $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
});

