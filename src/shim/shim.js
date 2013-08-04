(function(window, angular){
  'use strict';

  angular.module('helper.shim', ['helper.shim.lodash']);

  // Lo-Dash shim
  var lodashShim = angular.module('helper.shim.lodash', []);
  lodashShim.factory('_', function() {
    return window._;
  });

}(window, angular));
