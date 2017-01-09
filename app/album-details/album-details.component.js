angular.module("albumDetails").component('albumDetails', {
    templateUrl: 'album-details/album-details.template.html',
    controller: ['$http', '$routeParams',
        function albumDetailsController($http, $routeParams) {
            var self = this;

            self.setImage = function setImage(imageUrl) {
              self.mainImageUrl = imageUrl;
            }

            $http.get('albums/' + $routeParams.albumId + '.json').then(function (response) {
              self.album = response.data;
              self.setImage(self.album.images[0])
            });
        }
     ]
});
