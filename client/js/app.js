un_app = angular.module('un_app', ['ngRoute', 'ngMaterial'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/sign_in', {
        templateUrl: '/partials/sign_in.html',
        controller: 'signInCtrl'
      })
        .when('/sign_up', {
        templateUrl: '/partials/sign_up.html',
        controller: 'signUpCtrl'
    .when('/portal',{
        templateUrl: '/partials/portal.html',
        controller: 'portalCtrl'
    })
        .otherwise({
        redirectTo: '/'
      });
  })
.controller('newController', function($rootScope, $scope, $timeout, $mdSidenav, $location){
//    if($rootScope.user == undefined){
//        $location.url('/sign_in');
//    }
     $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
});

