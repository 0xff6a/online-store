(function() {

  var app = angular.module("onlineStore", []);

  app.controller("ProductController", ["$scope", "$http", function($scope, $http) {
    $scope.products = [];

    $http.get("data/products.json").success(function(data) {
      $scope.products = data;
    });
  }]);

  app.controller("VoucherController", ["$scope", "$http", function($scope, $http) {
    $scope.vouchers = [];

    $http.get("data/vouchers.json").success(function(data) {
      $scope.vouchers = data;
    });
  }]);

})();