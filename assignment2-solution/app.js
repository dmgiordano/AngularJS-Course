(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();

}



function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{ name: "bananas", quantity: 10 }, { name: "apples", quantity: 20 },
    { name: "tomatoes", quantity: 3 }, { name: "sliced turkey", quantity: 1 },
    { name: "bread", quantity: 1 }, { name: "chips", quantity: 2 }
  ];
  var boughtItems = [];

  service.boughtItem = function (itemIndex) {
    var item = toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item[0]);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

    service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
