(function() {
  'use strict';

  angular
      .module('MenuApp')
      .component('categories', {
        templateUrl: 'src/categorieslist/templates/categories.template.html',
        bindings: {
          categoriesList: '<'
        }
      });
})();