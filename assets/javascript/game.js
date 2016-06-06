
var randomNumber = $(".numberbox");
var winsId = $("#wins");
var lossesId = $("#losses");
var totalscore = $("#totalscore");
var total = 0;
var wins = 0;
var losses = 0;

var audioElement = document.createElement('audio');
 audioElement.setAttribute('src', 'assets/images/buttonSound.mp3');

 $("#green, #blue, #yellow, #purple").on("click", function(){
  audioElement.play();
});




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
	 total += greenNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});
 
$("#blue").on("click", function(){
	 total += greenNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});

$("#yellow").on("click", function(){
	 total += greenNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});


 

var checkwin = function (){
	if (numberGenerated === totalscore) {
		winsId = wins + 1;	
		alert('You won!!!!');
		resetGame();
	
	}else if(numberGenerated > totalscore){
		lossesId = losses + 1;
		alert('You lost!');
		resetGame();
	}else{
		
	}
	};

function resetGame() {
    window.location.reload()
};


