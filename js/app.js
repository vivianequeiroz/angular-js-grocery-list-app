var app = angular.module("tutorialApp", ["ngRoute", "TutorialCtrl"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "tutorial.html",
            controller: "js/controllers/tutorialCtrl.js"
        })
});