angular.
  module("albumDetails").
  component('albumDetails', {
    templateUrl: 'album-details/album-details.template.html',
    controller: ['$routeParams', 'Album',
      function albumDetailsController($routeParams, Album) {
          var self = this
          //$routeParams provides :albumId from the route config file
          self.album = Album.get({ albumId: $routeParams.albumId },
            function (album) {
            self.setImage(album.images[0]);
          });
          self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
          }
       }
    ]
    /*
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
     */
});
