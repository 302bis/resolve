(function() {
  'use strict';

  angular
    .module('resuelve')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'MainController',
        controllerAs: 'main',
        views: {
          '':{
            templateUrl: 'app/main/main.html',
          },
          'uno@home' : { 
            templateUrl: 'app/partials/uno.html'
         },
          'dos@home' : { 
            templateUrl: 'app/partials/dos.html'
         },
          'tres@home' : { 
            templateUrl: 'app/partials/tres.html'
         },
          'cuatro@home' : { 
            templateUrl: 'app/partials/cuatro.html'
         },
          'cinco@home' : { 
            templateUrl: 'app/partials/cinco.html'
         },
          'seis@home' : { 
            templateUrl: 'app/partials/seis.html'
         },
          'siete@home' : { 
            templateUrl: 'app/partials/siete.html'
         },
          'ocho@home' : { 
            templateUrl: 'app/partials/ocho.html'
         }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();

