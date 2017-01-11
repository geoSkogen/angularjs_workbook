angular.module("listCompApp").config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
//unsure how to redirect from '/' to '/albums'
//I thought the otherwise statement would do this, but evidently it doesn't
        $routeProvider.
          when('/', {
              templateUrl: 'landing-page.html'
          }).
          when('/albums', {
              template: '<album-list></album-list>'
          }).
          //vars defined with prefix ':' are extracted into $routeParams 
          when('/albums/:albumId', {
              template: '<album-details></album-details>'
          }).
          otherwise('/albums');
    }
 ]);
