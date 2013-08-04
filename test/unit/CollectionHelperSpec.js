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

    describe('"removeAtIndex" function', function() {
      it('remove item at given index and return removed value', function() {
        var result = service.removeAtIndex([0, 1, 2, 3, 4], 2);
        expect(result).toEqual(2);
      });
    });

    describe('"removeAll" function', function() {
      var haystack,
          removeItem;

      beforeEach(function() {
        haystack = [1, 9, 4, 2, 10, 4];
        removeItem = 4;
      });

      it('remove all items with same value in list', function() {
        var removedValues = service.removeAll(haystack, removeItem);
        expect(haystack).toEqual([1, 9, 2, 10]);
        expect(removedValues).toEqual([4, 4]);
      });

      it('remove all items in list that passed the identity function', function() {
        var removedValues = service.removeAll(haystack, function(item) { return item % 2 == 0; });
        expect(haystack).toEqual([1, 9]);
        expect(removedValues).toEqual([4, 2, 10, 4]);
      });
    });

    describe('"removeAllInCollection" function', function() {
      var haystack;

      beforeEach(function() {
        haystack = [1, 9, 4, 2, 10, 4];
      });

      it('remove everything if passed zero args', function() {
        var removedValues = service.removeAllInCollection(haystack);
        expect(haystack).toEqual([]);
        expect(removedValues).toEqual([1, 9, 4, 2, 10, 4]);
      });

      it('remove from this list all the elements that are contained in the specified collection', function() {
        var removedValues = service.removeAllInCollection(haystack, [1, 9, 4]);
        expect(haystack).toEqual([2, 10]);
        expect(removedValues).toEqual([1, 9, 4, 4]);
      });

    });

  });

}());
