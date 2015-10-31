(function() {
  'use strict';

  angular
    .module('spacetrade')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
