un_app.controller('splashCtrl', function($rootScope, $scope, splashFactory, $location) {
    $scope.screenHeight = window.innerHeight - 100;
    $scope.goTo = function(_url){
        $location.url('/' + _url);
    }
    console.log($scope);
});

un_app.controller('contentCtrl', function($rootScope, $scope, contentFactory, $location) {
//    homeFactory.get({
//        "url": '/api/home'
//    }).then(function(r){
//        $scope.data.response = r.data;
//        console.log($scope.data.response);
//    });
$scope.screenHeight = window.innerHeight - 100;
//Start!!!!!
    function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
    
//END!!!!!!!!!!!!!!!!!!!!!!!!!!!
});

un_app.controller('signUpCtrl', function($rootScope, $scope, $location, $timeout, $mdDialog, $mdSidenav, $log, signUpFactory){
    $scope.screenHeight = window.innerHeight - 100;
    $scope.submitBtn = function(){
        signUpFactory.save({
            "url": '/api/user_sign_up',
        "fullName": $scope.firstName + ' ' + $scope.lastName,
          "email": $scope.emailAddress,
          "username": $scope.username,
          "password": $scope.password
      }).then(function(data) {
            console.log(data);
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.emailAddress = '';
            $scope.username = '';
            $scope.password = '';
            //$location.url('/');
      });
    } 
});

un_app.controller('signInCtrl', function($rootScope, $scope, $location, $timeout, $mdDialog, $mdSidenav, $log, signInFactory){
    $scope.screenHeight = window.innerHeight - 100;
    $scope.data = {};
    $scope.errMsg = '';
    $scope.reqStatus = '';
    $scope.errCheck = false;
    $scope.submitBtn = function(){
        $scope.errMsg = '';
        $scope.reqStatus = '';
        $scope.errCheck = false;
        $scope.showloadingDialog();
        signInFactory.save({
            "url": '/api/user_sign_in',
          "username": $scope.username,
          "password": $scope.password
      }).then(function(resp) {
            console.log(resp);
            $scope.username = '';
            $scope.password = '';
            $scope.data.resp = resp.data.data;
            if(resp.data.status == 'success'){
                $rootScope.user = {};
                $rootScope.user.name = resp.data.data.name;
                $rootScope.user.email = resp.data.data.email;
                $location.url('/home');
            }else{
                $scope.reqStatus = resp.data.status;
                $scope.errMsg = resp.data.data.message;
                $scope.errCheck = true;
            }
      });
    }
    
    $scope.showloadingDialog = function() {
    $mdDialog.show({
      contentElement: '#loadingDialog',
      parent: angular.element(document.body),
      clickOutsideToClose: true
    });
  };
    
    $scope.goTo = function(url){
        $location.url('/sign_up');
    }
    
    $scope.closeDialog = function(){
        $mdDialog.hide();
    }
    
    console.log($scope);
});