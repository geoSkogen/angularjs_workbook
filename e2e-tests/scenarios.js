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

  });

});
