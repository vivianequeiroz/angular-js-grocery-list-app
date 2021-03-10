var app = angular.module('groceryListApp', []);

app.controller("HomeController", ["$scope", function($scope) {
    $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemsController", ["$scope", function($scope){
    $scope.groceryItems = [
        {itemName: 'milk', date: '2021-03-08'},
        {itemName: 'cookies', date: '2021-03-08'},
        {itemName: 'ice cream', date: '2021-03-08'},
        {itemName: 'potatoes', date: '2021-03-09'},
        {itemName: 'cereal', date: '2021-03-09'},
        {itemName: 'bread', date: '2021-03-09'},
        {itemName: 'eggs', date: '2021-03-10'},
        {itemName: 'tortillas', date: '2021-03-10'}
    ]

}])