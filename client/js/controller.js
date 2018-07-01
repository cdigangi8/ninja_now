un_app.controller('splashCtrl', function($rootScope, $scope, splashFactory, $location) {
    $scope.screenHeight = window.innerHeight - 100;
    $scope.goTo = function(_url){
        $location.url('/' + _url);
    }
    console.log($scope);
});

un_app.controller('contentCtrl', function($rootScope, $scope, contentFactory, $location, $timeout, $mdDialog) {
    
    var auth_exp = parseInt(localStorage.getItem('nn_auth_exp'),10);
    console.log(localStorage.getItem('nn_auth_exp'));
    var authDate = new Date(auth_exp*1000);
    var nowDate = new Date();
    var timeDiff = authDate.getTime() - nowDate.getTime();
    
    $scope.showSessionDialog = function() {
    $mdDialog.show({
      contentElement: '#sessionDialog',
      parent: angular.element(document.body),
      clickOutsideToClose: false
    });
  };
    
    if(timeDiff<0){
        $scope.session = 'inactive';
        $scope.showSessionDialog();
        $timeout(function(){
            $location.url('/sign_in');
        }, 3000);
    }else{
        $scope.session = 'active';
    }
    
    $scope.conArr = [{title: "Ninja Freestlye | Ep 1", ninjas: "Swanson, Labreck, McCartney, DiGangi, Silenzi", img: "/images/ninja_freestyle.png", link: "ninja_freestyle"},
                         {title: "Tips and Tricks | Ep 1", ninjas: "Swanson, Silenzi", img: "/images/tips_and_tricks_3.png", link: "tips_and_tricks"},
                         {title: "Tips and Tricks | Ep 2", ninjas: "Swanson, Silenzi", img: "/images/tips_and_tricks_2.png", link: "tips_and_tricks"},
                         {title: "Pineapple Pack | Ep 1", ninjas: "McCartney, Yamauchi", img: "/images/grant_lift_tyler.jpg", link: "pineapple_pack"}];
    
    $scope.liveArr = [{title: "Live | Movement Lab NNL", ninjas: "DiGangi, Labreck, Swanson", img: "/images/swanson_pic.jpg", link: "live_replay"},
                         {title: "Live | Apex NorCal NNL", ninjas: "DiGangi, Labreck, Swanson", img: "/images/swanson_pic.jpg", link: "live_replay"},
                         {title: "Live | NinjaQuest NNL", ninjas: "DiGangi, Labreck, Swanson", img: "/images/swanson_pic.jpg", link: "live_replay"},
                         {title: "Live | The Edge NNL", ninjas: "DiGangi, Labreck, Swanson", img: "/images/swanson_pic.jpg", link: "live_replay"}];
    
    $scope.freestyleArr = [{title: "Ninja Freestlye | Ep 1", ninjas: "Swanson, Labreck, McCartney, DiGangi, Silenzi", img: "/images/ninja_freestyle.png", link: "ninja_freestyle"},
                         {title: "Ninja Freestlye | Ep 2", ninjas: "Swanson, Labreck, McCartney, DiGangi, Silenzi", img: "/images/ninja_freestyle.png", link: "ninja_freestyle"},
                         {title: "Ninja Freestlye | Ep 3", ninjas: "Swanson, Labreck, McCartney, DiGangi, Silenzi", img: "/images/ninja_freestyle.png", link: "ninja_freestyle"},
                         {title: "Ninja Freestlye | Ep 4", ninjas: "Swanson, Labreck, McCartney, DiGangi, Silenzi", img: "/images/ninja_freestyle.png", link: "ninja_freestyle"}];
    
    $scope.tipsArr = [{title: "Tips and Tricks | Ep 1", ninjas: "Swanson, Silenzi", img: "/images/tips_and_tricks_3.png", link: "tips_and_tricks"},
                         {title: "Tips and Tricks | Ep 2", ninjas: "Swanson, Silenzi", img: "/images/tips_and_tricks_3.png", link: "tips_and_tricks"},
                         {title: "Tips and Tricks | Ep 3", ninjas: "Swanson, Silenzi", img: "/images/tips_and_tricks_3.png", link: "tips_and_tricks"},
                         {title: "Tips and Tricks | Ep 4", ninjas: "Swanson, Silenzi", img: "/images/tips_and_tricks_3.png", link: "tips_and_tricks"}];
    
     $scope.pineappleArr = [{title: "Pineapple Pack | Ep 1", ninjas: "McCartney, Yamauchi", img: "/images/grant_lift_tyler.jpg", link: "pineapple_pack"},
                         {title: "Pineapple Pack | Ep 2", ninjas: "McCartney, Yamauchi", img: "/images/grant_lift_tyler.jpg", link: "pineapple_pack"},
                         {title: "Pineapple Pack | Ep 3", ninjas: "McCartney, Yamauchi", img: "/images/grant_lift_tyler.jpg", link: "pineapple_pack"},
                         {title: "Pineapple Pack | Ep 4", ninjas: "McCartney, Yamauchi", img: "/images/grant_lift_tyler.jpg", link: "pineapple_pack"}];
    
    $scope.goTo = function(_url){
        $location.url('/' + _url);
    }
    
    
    
$scope.screenHeight = window.innerHeight - 100;
//Start!!!!!
//    function getTimeRemaining(endtime) {
//  var t = Date.parse(endtime) - Date.parse(new Date());
//  var seconds = Math.floor((t / 1000) % 60);
//  var minutes = Math.floor((t / 1000 / 60) % 60);
//  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//  var days = Math.floor(t / (1000 * 60 * 60 * 24));
//  return {
//    'total': t,
//    'days': days,
//    'hours': hours,
//    'minutes': minutes,
//    'seconds': seconds
//  };
//}
//
//function initializeClock(id, endtime) {
//  var clock = document.getElementById(id);
//  var daysSpan = clock.querySelector('.days');
//  var hoursSpan = clock.querySelector('.hours');
//  var minutesSpan = clock.querySelector('.minutes');
//  var secondsSpan = clock.querySelector('.seconds');
//
//  function updateClock() {
//    var t = getTimeRemaining(endtime);
//
//    daysSpan.innerHTML = t.days;
//    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//    if (t.total <= 0) {
//      clearInterval(timeinterval);
//    }
//  }
//
//  updateClock();
//  var timeinterval = setInterval(updateClock, 1000);
//}
//
//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
//initializeClock('clockdiv', deadline);
//    
//END!!!!!!!!!!!!!!!!!!!!!!!!!!!
});

un_app.controller('videoCtrl', function($rootScope, $scope, $location, $timeout, $mdDialog) {
    var auth_exp = parseInt(localStorage.getItem('nn_auth_exp'),10);
    var authDate = new Date(auth_exp*1000);
    var nowDate = new Date();
    var timeDiff = authDate.getTime() - nowDate.getTime();
    
    $scope.showSessionDialog = function() {
    $mdDialog.show({
      contentElement: '#sessionDialog',
      parent: angular.element(document.body),
      clickOutsideToClose: false
    });
    }
    
    if(timeDiff<0){
        $scope.session = 'inactive';
        $scope.showSessionDialog();
        $timeout(function(){
            $location.url('/sign_in');
        }, 3000);
    }else{
        $scope.session = 'active';
    }
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
            if(data.data.status=='success'){
                $location.url('/sign_in');
            }else{
                $scope.reqStatus = data.data.status;
                $scope.errMsg = data.data.data.message;
                $scope.errCheck = true;
                $scope.showloadingDialog();
            }
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.emailAddress = '';
            $scope.username = '';
            $scope.password = '';
//            $location.url('/sign_in');
      });
    } 
$scope.showloadingDialog = function() {
    $mdDialog.show({
      contentElement: '#errDialog',
      parent: angular.element(document.body),
      clickOutsideToClose: true
    });
  };
    $scope.closeDialog = function(){
        $mdDialog.hide();
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
                localStorage.setItem('nn_auth_exp', resp.data.jwt.accessToken.payload.exp);
                $location.url('/content');
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