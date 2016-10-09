(function() {
    'use strict';

    angular
        .module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject= ['itemsList'];

    function ItemsController(itemsList) {
        var itemDetail = this;
        itemDetail.itemsList = itemsList.menu_items;
        itemDetail.categoryName = itemsList.category.name;
    }
})();