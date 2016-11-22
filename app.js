(function () {
'use scrict';

angular.module('HelloWorldApp', [])
.controller('HelloWorldController', HelloWorldController);

HelloWorldController.$inject = ['$scope'];
function HelloWorldController($scope) {
  $scope.check = function () {
    return $scope.name = "Sandy";
  };
}

})();
