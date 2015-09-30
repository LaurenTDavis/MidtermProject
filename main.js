
// Keypad Buttons 
function number_write(x)
{
  var text_box = document.getElementById("number");
  if(x>=0 && x<=9)
  {
    if(isNaN(text_box.value))
    	text_box.value = 0;
 	text_box.value = (text_box.value * 10)+x;
  }
}

function number_clear()
{
  document.getElementById("number").value = "00:00";
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



angular.module('myApp', []); 

var mainControllerFunc = function($scope) { 
	$scope.openClick = false; 

	$scope.openMicro = function() {
		$scope.openClick = !$scope.openClick;
	
	}
	
}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc]); 