describe('albumDetails', function () {

  beforeEach(module('albumDetails'));

  describe('albumDetailsController', function () {
   var $httpBackend, ctrl;

   beforeEach(inject(function ($componentController,_$httpBackend_,$routeParams) {
     $httpBackend = _$httpBackend_;
     $httpBackend.expectGet('albums/obscura.json').respond({title: 'Obscura'});
     $routeParams.albumId = 'obscura';
     ctrl = $componentController('albumDetailsController');
   }));

   it('should fetch phone details', function () {
     expect(ctrl.album).toBeUndefined();

     $httpBackend.flush();
     expect(ctr.album).toEqual({title: 'Obscura'});
   });
  });
});
