un_app.factory('splashFactory', function($http) {
    //var urlBase = '/api/create_class';
    var _signUp = {};
    _signUp.save = function(params) {
        return $http.post(params.url, params);
    };
    return _signUp;
});

un_app.factory('contentFactory', function($http) {
    var _content = {};
    _content.save = function(params) {
        return $http.post(params.url, params);
    };
    return _content;
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