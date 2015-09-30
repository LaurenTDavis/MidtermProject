
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


// Open Door
function openDoor(field) {
    var y = $(field).find(".big-box");
    var x = y.attr("class");
    if (y.hasClass("back")) {
        y.removeClass("back");
    }
    else {
        $(".big-box").removeClass("back");
        y.addClass("back");
    }
}

angular.module('myApp', []); 

var mainControllerFunc = function($scope) { 
	$scope.openClick = false; 

	$scope.openMicro = function(event) {
		console.log(event); 
		// if ($scope.openClick === !$scope.openClick)
		openDoor(event);
	}
	
}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc]); 