
 var myModule = angular.module("myApp", []);

myModule.controller("counter",['$scope','$timeout', function($scope,$timeout){



$scope.sec = '0'+0;
$scope.min = 0;
$scope.counter = $scope.min * 60;

var stopped;
var audio = new Audio('ding.mp3');
console.log(parseInt($scope.counter))



$scope.enterTime = function() {
  $scope.counter = $scope.min * 60;
  $scope.sec = '0'+0
}
 
$scope.countdown = function() { 
    $scope.durationDisappear = true;
    stopped = $timeout(function() {
       console.log($scope.counter);
     $scope.counter--; 
     $scope.countdown();   
    }, 1000);
    $scope.min = (($scope.counter / 60)-($scope.counter%60/60))
    if ($scope.min < 10) { $scope.min = '0'+$scope.min}
    $scope.sec = $scope.counter % 60
    if ($scope.sec < 10) { $scope.sec = '0'+$scope.sec}

    if ($scope.counter == 0) {
      $timeout.cancel(stopped) 
      audio.play(); 
    }

  };

$scope.stop = function(){
  $scope.counter = 0;
  $scope.min = '0'+0;
  $scope.sec = '0'+0;
  $timeout.cancel(stopped);
  $scope.durationDisappear = false;
}
    
$scope.pause = function(){
   $timeout.cancel(stopped);
    
    } 


}]);

