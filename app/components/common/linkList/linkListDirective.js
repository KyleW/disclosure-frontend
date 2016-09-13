(function() {
  'use strict';

  var template = require('./linkList.html');

  module.exports = function odcaLinkList() {
    var directive = {
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: {
        listTitle: '@listTitle',
        listData: '=listData',
        selectFn: '&'
      },
      link: link,
      template: template,
      controller: function($log, $state) {
        var vm = this;

        if (vm.listTitle !== undefined || null) {
          vm.hasHeader = true;
        } else {
          vm.hasHeader = false;
        }

        // console.log('HAS HEADER = ', vm.hasHeader);
        vm.selectFn = function(selectedItem) {
          console.log('SELECTED', selectedItem);
        }
      }
    };
    return directive;

    function link(scope, element, attrs, vm) {}

  };
})();
