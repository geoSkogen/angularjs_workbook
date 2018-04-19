searchUsersApp.controller("searchUsersControl", function ($scope, $http) {
  $http.get('users/usernames.json').then(function (response) {
            $scope.users = response.data.usernames;
            //$scope.headBand = response.data.headBand;
          });
          /*
        $scope.users = [
          {username:"a"},
          {username:"b"},
          {username:"c"},
          {username:"d"},
          {username:"e"},
        ];
        */
});
