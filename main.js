
$(document).ready(function(){
	console.log("ready!");
	
	var words = ["feminism", "unity", "strength", "power", "emma!", "amen"];

	var wordArray = [];   //var wordArray = []; // we're declaring this is a variable available to EVERYONE (and we assign value to it various times)
	var wordHint = [];
	var badGuesses = 0 //increase bad guesses by 1 i++


	$("#start-game").on("click", function() {
		console.log("the player wants to start the game!");
		$("#start-game").hide();  // or animate and move to corner.
		$("h1").hide();
		$("h2").show();
		$("#hidden-game").show();
		$("#directions").show();
		$(".chosen-word").show().css("color", "red");
		$("body").css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/da/3d/fc/da3dfcf00e3ce5a9fca0a177703902af.jpg)");
		wordArray = chooseRandomWordArray();
		displayWordHint();
	});	

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
		$(".chosen-word").text(fields);
	}

	function updateWordHint(letter) {  // this is a parameter and it will blow up if not called; shows that we are expecting something.
		for (var i=0; i < wordArray.length; i++) {  // length = 8, but our i only goes up to 7
			if (letter == wordArray[i]) {
				wordHint[i] = letter;
				fields = wordHint.toString().replace(/,/g," ");  //replace(/aA/g,"_")
				$(".chosen-word").text(fields);	
			} 
		};
	}
		// console.log(words[0].split(""));
		// return words[0].split("");  // we could do "e" every "e" encounters
		// a return statement always kills a function. it must be the LAST thing. "return" can kill any other code from executing.
		
	//show blank spaces to represent each letter
	
	function guessLetter() {
		var guess = $("#guess-input").val();
		// var guess = "e"; // this has to be dynamic, something you can call everytime
		for (var i=0; i < wordArray.length; i++) {  // length = 8, but our i only goes up to 7
			if (guess == wordArray[i]) {
				updateWordHint(guess);  // here, (guess) is an argument
				console.log("Yes, there is an " + guess + ".");
			} else {
				console.log("There is not that letter!")
				$(".bad-guesses").append(guess);
				$(".bad-guesses").show();
				$("#guess-input").val("");
			}
		};
	};

 			// call word array.length, then allocate space for each.
			// where it starts, ends, increments 

		//get value from input field
		//loop: compare that letter to other letters in our array (for)
	

	// 
	$(".guess-button").on("click", function(){
		guessLetter();	
		// displayWordHint();
	});

// guessLetter()

});



//1. if you lose... keep track of every wrong guess - we can only have 7 before you DIE
//2. if you win.....
//3. add modal with gif (under intro tags)
//4. add bad letters


// user typers
// random letters, 
//submit (limit to one letter in input field)
// we loop through letters in the world (if / else --> true? )