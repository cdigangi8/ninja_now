un_app.controller('homeCtrl', function($rootScope, $scope, homeFactory) {
    $scope.screenHeight = window.innerHeight - 100;
    console.log($scope);
});

un_app.controller('signUpCtrl', function($rootScope, $scope, $location, $timeout, $mdDialog, $mdSidenav, $log, signUpFactory){
    
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
                $location.url('/portal');
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