(function() {
  'use strict';

  // TODO:: if in production serve dist else serve src app.js - ugh
  // TODO:: Add Google Analytics and Adsense - https://www.google.com/adsense/start/
  // TODO:: How to account for a true 'serving-size' per food?????
  // TODO:: write spec tests for all services, controllers and factories.
  // TODO:: Make a list of beta testers and send invites.
  // TODO:: 'variable-ize' css colors
  // TODO:: You need to add your custom domain to send email from it. Your sandbox domain is only for testing purposes....
  // TODO:: Seek IP patent for algorithm once past beta testing.
  // TODO:: Consider switching Food Data provider to these guys - https://www.labelinsight.com/developers/pricing or these guys http://platform.fatsecret.com/api/Default.aspx?screen=prem

  angular
    .module('commonSenseDietApp', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'underscore', 'LocalStorageModule']);

})();
