(function() {
  'use strict';

  angular
      .module('data')
      .service('MenuDataService', MenuDataServiceController);

  MenuDataServiceController.$inject = ['$http'];

  function MenuDataServiceController($http) {
    var service = {
      getAllCategories: getAllCategories,
      getItemsForCategory: getItemsForCategory
    };

    return service;

    function getAllCategories() {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (result) {
        return result.data;
      });
    }

    function getItemsForCategory(categoryShortName) {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function (result) {
        return result.data;
      });
    }
  }
})();