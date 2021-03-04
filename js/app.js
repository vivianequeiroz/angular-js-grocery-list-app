var app = angular.module('tutorialApp', ["ngRoute", "tutorialCtrl"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "views/tutorial.html",
            controller: "js/controllers/tutorialCtrl.js"
        })
});