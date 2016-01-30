// UserController is only focused on 1 responsobility which is to display user details

(function() {

  var app = angular.module("githubViewer");
 
  var UserController = function($scope, github, $routeParams) {
    
    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function(data) {
      $scope.repos = data;
    };
    
    var onError = function() {
      $scope.error = "Could not fetch data";
      $scope.user = null; 
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", ["$scope", "github", "$routeParams", UserController]);
  
}());

