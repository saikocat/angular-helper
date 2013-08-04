(function(angular){
  'use strict';

  angular.module('helper.collection', ['helper.shim']);

  var collectionModule = angular.module('helper.collection');

  collectionModule.factory('CollectionHelper', ['_', function(_) {
    var CollectionHelper = function() { };

    CollectionHelper.prototype.indexOf = function(haystack, needle, fromIndex) {
      return _.indexOf(haystack, needle, fromIndex);
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
