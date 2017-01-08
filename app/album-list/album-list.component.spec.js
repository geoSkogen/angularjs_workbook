describe('albumList', function () {

  beforeEach(module('albumList'));

  describe('albumListController', function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function ($componentController,_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('albums/albums.json')
                  .respond([{title: 'Obscura'}, {title: "Kobaia"}]);
      ctrl = $componentController('albumList');
    }));
    it(
      'should create an albums property containing 2 albums fetched with $http',
      function () {
          expect(ctrl.albums).toBeUndefined();

          $httpBackend.flush();
          expect(ctrl.albums).toEqual([{title: 'Obscura'}, {title: "Kobaia"}]);
      });
   });
});
