(function() {
  'use strict';

  angular
    .module('commonSenseDietApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $scope, $document) {
    var vm = this,
      scope = $scope

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1450389822870;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'pulse';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    // This event handler is called by the ngKeyup directive in home.html.
    scope.handleTypeEvent = function() {
      typedSomethingIn();
    };

    // Places the searchbar in top left corner of page on key up
    function typedSomethingIn() {
      angular.element(document.querySelector('#wrapper')).addClass('not-visible');
      angular.element(document.querySelector('#move-searchbar')).removeClass('searchbar-container').addClass('global-searchbar-container')
      angular.element(document.querySelector('#disclaim-btn-container')).addClass('not-visible');
    };



  }
})();
