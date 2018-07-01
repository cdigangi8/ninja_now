un_app.factory('splashFactory', function($http) {
    //var urlBase = '/api/create_class';
    var _signUp = {};
    _signUp.save = function(params) {
        return $http.post(params.url, params);
    };
    return _signUp;
});

un_app.factory('contentFactory', function($http) {
    //var urlBase = '/api/content';
    var _home = {};
    _home.save = function(params) {
        return $http.get(params.url, params);
    };
    return _home;
});

un_app.factory('signUpFactory', function($http) {
    //var urlBase = '/api/create_class';
    var _signUp = {};
    _signUp.save = function(params) {
        return $http.post(params.url, params);
    };
    return _signUp;
});

un_app.factory('signInFactory', function($http) {
    var _signIn = {};
    _signIn.save = function(params) {
        return $http.post(params.url, params);
    };
    return _signIn;
});