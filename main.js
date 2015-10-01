
// Keypad Buttons 
function number_write(x)
{
  var text_box = document.getElementById("number");
  if (x >= 0 && x <= 9)
  {
    if (isNaN(text_box.value))
    	text_box.value = 0;
 	text_box.value = (text_box.value * 10) + x;
  }
}

function number_clear()
{
  document.getElementById("number").value = '';
}




// Audio Controls 
function playSound1(){
  var audio = document.getElementById("audio1");
       audio.play();
}

function playSound2(){
  var audio = document.getElementById("audio2");
       audio.play();
}

function playSound3(){
  var audio = document.getElementById("audio3");
       audio.play();
}


angular.module('myApp', []); 

var mainControllerFunc = function($scope, $timeout) { 
	$scope.openClick = false; 

	$scope.openMicro = function() {
		$scope.openClick = !$scope.openClick;
	
	}



$scope.sec = '0'+0;
$scope.min = 0;
$scope.counter = $scope.min * 60;

var stopped;
var audio = new Audio('Sounds/ding.mp3');
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
     number_write($scope.countdown());   
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
	
}


angular.module('myApp').controller('mainController', ['$scope', '$timeout', mainControllerFunc]); 