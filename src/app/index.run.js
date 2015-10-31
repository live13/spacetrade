(function() {
  'use strict';

  angular
    .module('gulpangular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
