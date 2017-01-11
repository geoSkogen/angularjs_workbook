describe('albumDetails', function () {

  beforeEach(module('albumDetails'));

  describe('albumDetailsController', function () {
   var $httpBackend, ctrl;
   var albumData = {
     title: 'Obscura',
     images : [
       'images/gorgutsO.jpg',
       'images/gorgutsOr.jpg',
       'images/gorgutsOrr.jpg',
       'images/gorgutsOrrr.jpg'
     ]
   };
   beforeEach(inject(function ($componentController,_$httpBackend_,$routeParams) {
     $httpBackend = _$httpBackend_;
     $httpBackend.expectGet('albums/obscura.json').respond(phoneData);
     $routeParams.albumId = 'obscura';
     ctrl = $componentController('albumDetailsController');
   }));

   it('should fetch phone details', function () {
     expect(ctrl.album).toBeUndefined();

     $httpBackend.flush();
     expect(ctrl.album).toEqual(albumData);
   });
  });
});
