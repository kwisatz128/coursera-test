(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig)
.run(RunFunction);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/categorieslist/templates/home.template.html'
})

  // List Items
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categorieslist/templates/categories.template.html',
        controller: 'CategoriesController',
        controllerAs: 'mainList',
        resolve: {
          categoriesList: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

  // Item detail
      .state('items', {
        url: '/items/{shortname}',
        templateUrl: 'src/categorieslist/templates/items.template.html',
        controller: 'ItemsController',
        controllerAs: 'itemDetail',
        resolve: {
          itemsList: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.shortname);
          }]
        }
      });
}

    RunFunction.$inject = ['$rootScope']
    function RunFunction($rootScope) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log(error);
        });
    }

})();
