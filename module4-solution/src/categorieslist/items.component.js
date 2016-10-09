(function() {
  'use strict';

  angular
      .module('MenuApp')
      .component('items', {
        templateUrl: 'src/categorieslist/templates/items.template.html',
        bindings: {
          itemsList: '<'
        }
      });
})();