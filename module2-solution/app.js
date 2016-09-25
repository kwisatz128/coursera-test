(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyShopCtrl = this;

  toBuyShopCtrl.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyShopCtrl.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alrdBoughShopCtrl = this;

  alrdBoughShopCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var boughtItems = [];

  var toBuyList = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "dietors",
      quantity: 8
    },
    {
      name: "plumcake",
      quantity: 2
    },
    {
      name: "cereals",
      quantity: 20
    },
    {
      name: "water",
      quantity: 6
    }
  ];

  service.getItemsToBuy = function () {
    return toBuyList;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.boughtItem = function (itemIndex) {
    boughtItems.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
  };
}

})();
