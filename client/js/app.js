un_app = angular.module('un_app', ['ngRoute', 'ngMaterial'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/splash', {
        templateUrl: '/partials/splash.html',
        controller: 'splashCtrl'
      })
        .when('/sign_in', {
        templateUrl: '/partials/sign_in.html',
        controller: 'signInCtrl'
      })
        .when('/sign_up', {
        templateUrl: '/partials/sign_up.html',
        controller: 'signUpCtrl'
    })
    .when('/home', {
        templateUrl: '/partials/content.html',
        controller: 'contentCtrl'
    })
        .otherwise({
        redirectTo: '/splash'
      });
  })
.controller('newController', function($rootScope, $scope, $timeout, $mdSidenav, $location){
     $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.goTo = function(_url){
        $location.url('/' + _url);
    }
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
});

