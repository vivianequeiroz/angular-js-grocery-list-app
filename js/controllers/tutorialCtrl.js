// *! External modules are usually created to store functionalities
angular.module("tutorialApp", [])

.controller("TutorialCtrl",  ["$scope", "Calculations", function($scope, Calculations){
    // $scope.name = 'Viviane'
    $scope.tutorialObject = { }
    $scope.tutorialObject.title = "Main title";
    $scope.tutorialObject.subtitle = "Subtitle";
    $scope.tutorialObject.firstName = "Viviane";
    $scope.tutorialObject.lastName = "Queiroz";
    $scope.tutorialObject.bindOutput = 2;

    $scope.timesTwo = function(){
        // $scope.tutorialObject.bindOutput *= 2;
        $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput)
    };

    $scope.pythagoeramTheorem = function() {
        $scope.tutorialObject.bindOutput = Calculations.pythagoeramTheorem($scope.tutorialObject.bindOutput, $scope.tutorialObject.bindOutput)
    }

}])

.directive("vqGreetingMessage", function(){
    return {
        // A === attribute, E === element
        restrict: "AE",
        template: "<div>Howdy! How are you?</div>"
    }
})

// Creating a service

.factory("Calculations", function() {
    var calculations = { }; //object creation

    calculations.timesTwo = function(a) {
        return a * 2;
    };

    calculations.pythagoeramTheorem = function(a, b) {
        return (a * a) + (b * b);
    }

    return calculations;
})

.controller("TutorialCtrl2", ["$scope", function($scope) {
    $scope.secondTutorial = "This is the second tutorial!";
}]);