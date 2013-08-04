(function(){
  'use strict';

  describe('CollectionHelper service module', function() {
    var service;

    beforeEach(function() {
      module('helper.collection');

      inject(['CollectionHelper', function(CollectionHelper) {
        service= CollectionHelper;
      }]);
    });

    describe('"replace" function', function() {
      var haystack,
          newItem,
          oldItem;

      beforeEach(function() {
        haystack = [1, 9, 4, 2, 10, 4];
        newItem = 5;
        oldItem = 4;
      });

      it('replace first matching item in list', function() {
        service.replace(haystack, 4, 5);
        expect(haystack).toEqual([1, 9, 5, 2, 10, 4]);
      });

      it('replace first matching item in list from an index)', function() {
        service.replace(haystack, 4, 5, 3);
        expect(haystack).toEqual([1, 9, 4, 2, 10, 5]);
      });
    });

  });

}());
