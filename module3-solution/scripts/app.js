(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', ItemsFoundDirective);


function ItemsFoundDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: ItemsFoundDirectiveController,
      controllerAs: 'narrowlist',
      bindToController: true
    };
    return ddo;
  }

  function ItemsFoundDirectiveController() {
    var list = this;
    list.isEmpty = function() {
    return (list.items == 'undefinded' || list.items.length === 0);
  }
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.items = [];


  menu.getMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      menu.items = response;
    })
    .catch(function (error) {
      console.log(error);
    })
  };


  menu.removeItem = function(itemIndex) {
    menu.items.splice(itemIndex, 1);
  }
}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      var foundItems = [];

      for (var i = 0; i < result.data.menu_items.length; i++) {
        var description = result.data.menu_items[i].description;
        if (description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(result.data.menu_items[i]);
        }
      }
      return foundItems;
    });
  };

}

})();
