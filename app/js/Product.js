(function() {

  var product = angular.module("product", []);

  product.controller("ProductController", ["$scope", "$http", function($scope, $http) {
    $scope.products = [];

    $http.get("data/products.json").success(function(data) {
      $scope.products = data;
    });
  }]);

  product.directive("productList", function() {
    return {
      restrict: "E",
      templateUrl: "partials/product-list.html"
    };
  });

})();