(function() {
  'use strict';

  /* Common Modules */
  require('../common/core/core');
  require('../common/appMainNav/appMainNav');
  require('../common/appMainFooter/appMainFooter');
  require('../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');

  /* AppMain Modules */
  require('./aboutPageModule/aboutPage');
  require('./committeePageModule/committeePage');
  require('./localePageModule/localePage');
  require('./faqPageModule/faqPage');
  require('./measurePageModule');

  /* Components of AppMain */
  var appMainRoutes = require('./appMainRoutes');
  var appMainDirective = require('./appMainDirective');
  var AppMainController = require('./AppMainController');

  module.exports = angular.module('appMainModule',
    [
      'coreModules',
      'appMainNavModule',
      'appMainFooterModule',
      'pageHeaderBreadcrumbsModule',
      'localePageModule',
      'aboutPageModule',
      'committeePageModule',
      'faqPageModule',
      'measurePageModule'
    ])
    .config(appMainRoutes)
    .directive('appMain', appMainDirective)
    .controller('AppMainController', AppMainController);

})();
