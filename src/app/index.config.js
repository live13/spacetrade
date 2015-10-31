(function() {
  'use strict';

  angular
    .module('spacetrade')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
