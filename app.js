(function() {
  
  // This is the place to define the application.
  // We are telling angular that our module has a dependency on ngRoute.
  // We have to tell angular that ngRoute is another module that our module needs.
  var app = angular.module("githubViewer", ["ngRoute"]);
  
  // Config methos is used to define our routes.
  // Here is a configuration funtion to run when you are bringing this module to light.
  // Angular will run this early on in the lifecycle of the application.
  // Configure route provider.
  // If a user comes into /main, angular will redirect to templateUrl.
  // This is what we will have for routeProvider:
  //  1. main.html (search user)
  //  2. user.html (user details)
  //  3. repo.html (repository details)
  //  4. index.html (shell)
  // Whenever angular sees a segment of the URL with a collon ":"username its going treat that piece of the URL as a parameter
  //   a piece of data that needs to be extracted from the URL and perhabs given to other components so what they know what to search for.
  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "repo.html",
        controller: "RepoController"
      })
      .otherwise({ redirectTo: "/main" });
  });
  
}());