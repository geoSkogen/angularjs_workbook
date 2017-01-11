//this would be fed to the dependencies array of the main app, eg:
//var mainApp = angular.module("mainApp", ["listCompApp"]);
angular.module("listCompApp", ['ngRoute', 'ngAnimate', 'core', 'albumList', 'albumDetails']);
