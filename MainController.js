// *************************************************************************** 
// MainControllers responsobility is manage the search form and the countdown
//  if the user doesn't perform the search first.
// *************************************************************************** 

(function() {

  var app = angular.module("githubViewer");
 
  var MainController = function($scope, $interval, $location) {

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) { 
        $scope.search($scope.username); 
      }
    };
    
    var countdownInterval = null;
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    $scope.search = function(username) {
      if(countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      // Place the code to go the the right route so we actually search and display the user
      $location.path("/user/" + username);
    };
    
    $scope.username = "angular";
    $scope.countdown = 5;
    startCountdown();
  };

  app.controller("MainController", ["$scope",  "$interval", "$location", MainController]);
  
}());

