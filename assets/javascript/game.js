

var randomNumber = $(".numberbox");
var winsClass = $(".wins");
var lossesClass = $(".losses");
var totalscore = $("#totalscore");
var total = 0;
var wins = " ";
var losses = " ";

var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'assets/images/buttonSound.mp3');

$(document).ready(function(){
 $("#green, #blue, #yellow, #purple").on("click", function(){
  audioElement.play();
});


var checkwin = function (){
	if (numberGenerated === total) {
		$(winsClass).html("Wins: " + wins + 1);	
		alert('You won!!!!');
		resetGame();
	
	}else if(total > numberGenerated){
		$(lossesClass).html("Losses: " + losses + 1);
		alert('You lost!');
		resetGame();
		}
	};


var generateNum = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var numberGenerated = generateNum(19, 120);

var greenNum = generateNum(1, 12);
var purpleNum = generateNum(1, 12);
var blueNum = generateNum(1, 12);
var yellowNum = generateNum(1, 12);

randomNumber.append(numberGenerated);



function setScore(){
	$(totalscore).html("Your total score is: " + total);
}


$("#green").on("click", function(){
	 total += greenNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});

$("#purple").on("click", function(){
	 total += purpleNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});
 
$("#blue").on("click", function(){
	 total += blueNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});

$("#yellow").on("click", function(){
	 total += yellowNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});



function resetGame() {
    window.location.reload()
};

});