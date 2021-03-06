(function() {
  'use strict';

  // Application developers are free to define their own services by registering the service's name and service factory function, with an Angular module. This makes it available to the rest of the app.
  angular
    .module('commonSenseDietApp')
    .factory('getFoodNamesOnly', getFoodNamesOnly);

  /** @ngInject */
  // Angular services are substitutable objects that are wired together using dependency injection(DI). You can use services to organize and share code across your app via global templating.
  function getFoodNamesOnly($log, $http) {

    // Here we define a service and a method function and access our API variables from our .clientenv file.
    var service = {
      getFoodNamesList: getFoodNamesList
    }

    return service;

    // Here we define the service's main functionality. Notice we pass in 'limit' as an argument. This is defined inside malarkey.directive.js as a integer which is also where this function gets invoked.
    function getFoodNamesList(limit) {
      // If no limit passed then just manually set limit to avoid undefined.
      if(!limit) {
        limit = 30;
      }

      // Here we calling our Node server which will call NDB Food List API using our .env variables but not without concatenating a limit integer and our API key. We utilize an angular try-catch and depending on if successful or not we display error getFoodNamesFail() or return data returnFoodNamesList() to malarkey.controller.js. For a list of all request parameters visit - https://ndb.nal.usda.gov/ndb/doc/apilist/API-LIST.md
      return $http.get('/api/getFoodNamesOnly/' + limit)
          .then(returnFoodNamesList)
          .catch(getFoodNamesFail);


      function returnFoodNamesList(response) {
        return response.data;
      }

      function getFoodNamesFail(err) {
        return $log.error(err.data);
      }
    }
  }
})();
