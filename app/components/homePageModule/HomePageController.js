'use strict';

function HomePageController($scope, $log, $http) {
  $scope.searchBarEnabled = false;
  $scope.testVar = 'We are up and running using a required module!';
  $scope.logClickEvent = logClickEvent;

  function logClickEvent($event) {
    $log.info('CLICK EVENT = ', $event);
  };
}

HomePageController.$inject = ['$scope', '$log', '$http'];
module.exports = HomePageController;
