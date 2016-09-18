(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.eatItems = "";

  $scope.showMessage = function () {
    var emptyMessage = "Please enter data first";
    var enjoyMessage = "Enjoy!";
    var toomuchMessage = "Too much!";

    var items = $scope.eatItems.split(",");
    console.log("ITEMS: " + items);

    if (items == "") {
      $scope.message = emptyMessage;
    }
    else if (items.length <= 3) {
      $scope.message = enjoyMessage;
    }
     else if (items.length > 3) {
      $scope.message = toomuchMessage;
    }

    return $scope.message;
  };

}

})();
