(function(angular){
  'use strict';

  angular.module('helper.collection', ['helper.shim']);

  var collectionModule = angular.module('helper.collection');

  collectionModule.factory('CollectionHelper', ['_', function(_) {
    var CollectionHelper = function() { };

    CollectionHelper.prototype.indexOf = function(haystack, needle, fromIndex) {
      return _.indexOf(haystack, needle, fromIndex);
    };

    CollectionHelper.prototype.remove = function(list, valueOrPredicate) {
      var self = this;
      var predicate = angular.isFunction(valueOrPredicate) ? valueOrPredicate : function (value) { return angular.equals(value, valueOrPredicate); };
      var index = _.findIndex(list, predicate);
      if (index >= 0) {
        return self.removeAtIndex(list, index);
      } else {
        return undefined;
      }
    };

    CollectionHelper.prototype.removeAll = function(list, valueOrPredicate) {
      var predicate = angular.isFunction(valueOrPredicate) ? valueOrPredicate : function (value) { return angular.equals(value, valueOrPredicate); };
      var removedValues = [];
      for (var i = 0; i < list.length; i++) {
        var value = list[i];
        if (predicate(value)) {
          removedValues.push(value);
          list.splice(i, 1);
          i--;
        }
      }
      return removedValues;
    };

    CollectionHelper.prototype.removeAllInCollection = function(list, arrayOfValues) {
      var self = this;

      // Remove everything if passed zero args
      if (arrayOfValues === undefined) {
        var allValues = list.slice(0);
        list.splice(0, list.length);
        return allValues;
      }
      // Arg is interpreted as array of values
      if (!arrayOfValues)
        return [];
      return self.removeAll(list, function(value) {
        return (self.indexOf(arrayOfValues, value)) >= 0;
      });
    };

    CollectionHelper.prototype.removeAtIndex = function(list, index) {
      var removedValue = list[index];
      list.splice(index, 1);
      return removedValue;
    };


    CollectionHelper.prototype.replace = function(list, oldItem, newItem, fromIndex) {
      var index = _.indexOf(list, oldItem, fromIndex);
      if (index >= 0) {
        list[index] = newItem;
      }
    };

    return new CollectionHelper();
  }]);

}(angular));
