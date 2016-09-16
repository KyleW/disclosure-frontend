/**
 * @ngdoc controller
 * @name electionTypePageModule:ElectionTypePageController
 *
 * @description
 *
 *
 * @requires $scope
 * */
(function() {
  'use strict';

  function ElectionTypePageController($log, $state, $stateParams) {

    var election = this;
    election.state = $state;
    election.electionType = $stateParams.electionType;
    election.electionTitle = $stateParams.electionTitle;

  }

  ElectionTypePageController.$inject = ['$log', '$state', '$stateParams'];
  module.exports = ElectionTypePageController;
})();