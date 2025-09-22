(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.evaluationRsp = "Please enter data first";


  $scope.checkLunch = function () {
    const itemsArray = $scope.lunchList.split(",");
    if(itemsArray[0] == ""){
        $scope.evaluationRsp = "Please enter data first";
        return;
    }
    var numItems = itemsArray.length
    console.log(numItems);
    if(numItems < 4) {
        $scope.evaluationRsp = "Enjoy!";
    } 
    else {
        $scope.evaluationRsp = "Too Much!";   
    }
  };

}

})();