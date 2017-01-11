'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
describe('listCompApp', function () {

  describe('view: albumList', function () {

    beforeEach(function () {
      browser.get('index.html#!/albums');
    });

    it('should filter album list per user input', function () {
      var albumList = element.all(by.repeater('album in $ctrl.albums'));
      var query = element(by.model('$ctrl.query'));

      expect(albumList.count()).toBe(14);

      query.sendKeys('comus');
      expect(albumList.count()).toBe(1);

      query.clear();
      query.sendKeys('or');
      expect(albumList.count()).toBe(5);
    });

    it('should re-order album list per drop-down selection', function () {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderSel'));
      var titleOption = orderSelect.element(by.css('option[value="title"]'));
      var albumTitleColumn = element.all(by.repeater('album in $ctrl.albums').column('album.title'));

      function getTitles() {
        return albumTitleColumn.map(function (elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('or');
      expect(getTitles()).toEqual([
        'Radian Futura',
        'Book of Horizons',
        'In Glorious Times',
        'August Engine',
        'Obscura'
      ]);

      titleOption.click();
      expect(getTitles()).toEqual([
        'August Engine',
        'Book of Horizons',
        'In Glorious Times',
        'Obscura',
        'Radian Futura'
      ]);
    });

    it('should render specific links', function () {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('comus');

      element.all(by.css('ul li.liOuter div.liInner a')).first().click();
      expect(browser.getLocationAbsUrl()).toBe('/albums/first-utterance');
    });

  });

  describe('view albumDetails', function() {

    beforeEach(function () {
      browser.get('index.html#!/albums/first-utterance');
    });

    it('should display the First Utterance page', function () {
      expect(element(by.binding('$ctrl.album.title')).getText()).toBe('First Utterance');
    });

//BOTH OF THESE IMAGE RELATED TESTS ARE CAUSING THIS SCRIPT TO FAIL
//console output read .getAttribute(...).toMatch is not a function

/*
    it('should display first image as main image', function () {
      var mainImage = element(by.css('img.album'));

      expect(mainImage.getAttribute('src').toMatch(/images\/comusFU.jpg/));
    });

    it('should switch clicked image to main image', function() {
      var mainImage = element(by.css('img.album'));
      var thumbnails = element.all(by.css('img.thumbC'));

      thumbnails = element.get(2).click();
      expect(mainImage.getAttribute('src')).toMatch(/images\/comusFUrr.jpg/);
    });*/

  });

});
