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
    .when('/content', {
        templateUrl: '/partials/content.html',
        controller: 'contentCtrl'
    })
    .when('/ninja_freestyle', {
        templateUrl: '/partials/ninja_freestyle.html',
    })
    .when('/live_replay', {
        templateUrl: '/partials/live_replay.html',
    })
    .when('/behind_the_buzzer', {
        templateUrl: '/partials/behind_the_buzzer.html',
    })
    .when('/pineapple_pack', {
        templateUrl: '/partials/pineapple_pack.html',
    })
    .when('/tips_and_tricks', {
        templateUrl: '/partials/tips_and_tricks.html',
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

