describe('HelloWorldController', function () {
  beforeEach(module('HelloWorldApp'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.check', function () {
    it ('check name is set to Sandy', function () {
      var $scope = {};
      var controller = $controller('HelloWorldController', {$scope: $scope});
      $scope.check();
      expect($scope.name).toEqual('Sandy');
    });
  });
});
