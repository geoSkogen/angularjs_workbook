angular.module("albumDetails").component('albumDetails', {
    template: '<p>view for <span>{{ $ctrl.albumId }}</span></p>',
    controller: ['$routeParams',
        function albumDetailsController($routeParams) {
            this.albumId = $routeParams.albumId;
        }
     ]
});