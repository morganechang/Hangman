
$(document).ready(function(){
	console.log("ready!");
	
	var words = ["feminism", "unity", "strength", "emma", "muslim", "mexico", "abortion", "hillary"];

	var wordArray = [];   //var wordArray = []; // we're declaring this is a variable available to EVERYONE (and we assign value to it various times)
	var wordHint = [];
	var badGuesses = 7 //decrease remaining bad guesses by 1=-
	var goodGuesses = 0 // increase good guesses by 1-+

	$("#start-game").on("click", function() {
		startGame();
	});


	function startGame(){
		console.log("the player wants to start the game!");
		$(".intro-container").hide();
		$(".game-container").show();
		$("#chosen-word").show().css("color", "red");
		$("body").css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/da/3d/fc/da3dfcf00e3ce5a9fca0a177703902af.jpg)");
		wordArray = chooseRandomWordArray();
		debugger
		displayWordHint();

	};	

		//happens on user click button
		//hide button
		//reveal input box + blankFields
		//choose random word

	function chooseRandomWordArray()  {   // objects v. methods() v. functions weNamedFunction  // method() is passed ONTO an object. ie: .log needs to be attached to an object (log)
		// var randomWord = function(){
		var index = Math.floor(Math.random() * words.length);
		// return words[index];
		var chosenWord = words[index]
		// debugger;
		console.log(chosenWord);
		console.log(chosenWord.split(""));
		return chosenWord.split("");
	}	

	function displayWordHint() {
		for (var i=0; i< wordArray.length; i++) {
			wordHint.push("_");
		}
		fields = wordHint.toString().replace(/,/g," ");  //replace(/aA/g,"_") // turning array into a string .toString()
		$("#chosen-word").text(fields);

		// str.replace(/\s+/g, '')
	}

	function updateWordHint(letter) {  // this is a parameter and it will blow up if not called; shows that we are expecting something.
		for (var i=0; i < wordArray.length; i++) {  // length = 8, but our i only goes up to 7
			if (letter == wordArray[i]) {
				wordHint[i] = letter;
				fields = wordHint.toString().replace(/,/g," ");  //replace(/aA/g,"_")
				$("#chosen-word").text(fields);	
			} 
		};
	}

	function displayBadGuess() {  // this is a parameter and it will blow up if not called; shows that we are expecting something.
		var guess = $("#guess-input").val().toLowerCase();	

		$.getJSON(
	      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=trump",
	      function(response) {
	        console.log(response);
	        $(".modal-trump").html("<img src=" + response.data.image_url + ">");
	      });  //"response" is specific term
		$(".bad-guesses").append(guess, ", ");
		$(".bad-guesses").show().css("display", "block");
		$(".bad-count").show().css("display", "block");
		$("#bad-count-number").html(badGuesses -=1); // += is the same as ++ // -= is same as --
		$(".modal-trump").show();
			setTimeout(function(){
				$(".modal-trump").hide();
			}, 2000);
		if (badGuesses == 0) {
			// $("#chosen-word").show().css("display", "block");
			$("#chosen-word").hide();
			// debugger
			$("#correct-word-intro").show().css("display","block");
			$("#correct-word").append(wordArray);
			setTimeout(function(){
					$(".game-container").hide();
					$(".lost").show();
					$("body").css("background-image", "url(https://img.clipartfest.com/2a13c81e91d4921e18eb2bd38ceb9043_-it-gif-donald-trump-meme-trump-meme_386-515.gif)");
				}, 2000);
			// debugger
			
			// $("body").css("background-image", "url(https://img.clipartfest.com/2a13c81e91d4921e18eb2bd38ceb9043_-it-gif-donald-trump-meme-trump-meme_386-515.gif)", "background-size", "");
			// })		
		};

	}
		
		// console.log(words[0].split(""));
		// return words[0].split("");  // we could do "e" every "e" encounters
		// a return statement always kills a function. it must be the LAST thing. "return" can kill any other code from executing.
		
	//show blank spaces to represent each letter
	
	function guessLetter() {
		var guess = $("#guess-input").val().toLowerCase();
		var matches = 0;

		$.getJSON(
	      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=clinton",
	      function(response) {
	        console.log(response);
	        $(".modal-clinton").html("<img src=" + response.data.image_url + ">");
	      });
		// var total = wordArray.toString();  //replace(/aA/g,"_")
		// var guess = "e"; // this has to be dynamic, something you can call everytime
		for (var i=0; i < wordArray.length; i++) {  // length = 8, but our i only goes up to 7
			if (guess == wordArray[i]) {
				updateWordHint(guess);
				matches = 1;  // here, (guess) is an argument
				console.log("Yes, there is an " + guess + ".");
				goodGuesses++;
				$(".modal-clinton").show();
				setTimeout(function(){
					$(".modal-clinton").hide();
				}, 2000);
			} 
		};
		if (matches == 0){
			console.log("Nope, there is not an " + guess + ".");
			displayBadGuess();

		}
		if (goodGuesses == wordArray.length){
			console.log("YOU WIN");
			$(".game-container").hide();
			$("body").css("background-image", "url(https://media.giphy.com/media/l2SpPZdjcX3JSjR3a/giphy.gif)");
			$(".won").show();
		}
		$("#guess-input").val("");
	};

	function playAgain() {	
		location.reload();
		debugger
		startGame();
		$("#start-game").trigger("click");
		
		// location.reload();
		// $(".game-container").hide();
		// $("#end-game").hide();
		// $("#chosen-word").remove();
		// $("#bad-guesses").hide();
		// $("#bad-count").hide();
		// startGame();
	
		// wordHint = [];
		// wordArray = chooseRandomWordArray();
		// displayWordHint();
		// debugger
		};  // is there a way to only load single page? 

 			// call word array.length, then allocate space for each.
			// where it starts, ends, increments 

		//get value from input field
		//loop: compare that letter to other letters in our array (for)
	

	// 
	$(".guess-button").on("click", function(){
		guessLetter();	
		// displayWordHint();
	});


	$(".play-again").on("click", function(){
		playAgain();
	});

// guessLetter()

});




// user typers
// random letters, 
//submit (limit to one letter in input field)
// we loop through letters in the world (if / else --> true? )