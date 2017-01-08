angular.module("albumDetails").component('albumDetails', {
    templateUrl: 'album-details/album-details.template.html',
    controller: ['$http', '$routeParams',
        function albumDetailsController($http, $routeParams) {
            var self = this;

            $http.get('albums/' + $routeParams.albumId + '.json').then(function (response) {
              self.album = response.data;
            });
        }
     ]
});
