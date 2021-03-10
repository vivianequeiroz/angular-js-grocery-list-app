var app = angular.module('tutorialApp', ["ngRoute", "TutorialCtrlModule"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "views/tutorial.html",
            controller: "TutorialCrl",
        })
        .when("/secondTutorial", {
            templateUrl: "views/tutorial.html",
            controller: "TutorialCrl2",
        })
        .otherwise ({
            redirecTo: "/"
        })
});