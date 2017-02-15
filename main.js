
$(document).ready(function(){
	console.log("ready!");
	
	var words = ["feminism", "unity", "strength", "power", "emma!", "amen"];
	
	$("#startGame").on("click", function(){
	console.log("the player wants to start the game!");
	$("#start-game").hide();  // or animate and move to corner.
	$("#hidden-game").show();
	$("body").css("background-image", "url(https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg)");
	});
		
		//happens on user click button
		//hide button
		//reveal input box + blankFields
		//choose random word
	

	function chooseRandomWordArray()  {   // objects v. methods() v. functions weNamedFunction  // method() is passed ONTO an object. ie: .log needs to be attached to an object (log)
		var randomWord = function(){
			var index = Math.floor(Math.random() * words.length);
			return words[index];	
		}
	
	var chosenWord = randomWord(this);
	console.log(chosenWord);
	console.log(chosenWord.split(""));
	var chosenWordSplit = chosenWord.split("");
	// $(".correct-letters").append(chosenWord); //.html() also works
	$(".correct-letters").append(chosenWordSplit).replaceWith("_");
	// $(".correct-letters").append(chosenWordSplit).replace(/\./g , "_");

	return chosenWord.split("");
	
	// console.log(words[0].split(""));
	// return words[0].split("");  // we could do "e" every "e" encounters
	// a return statement always kills a function. it must be the LAST thing. "return" can kill any other code from executing.
	}
	
	var wordArray = chooseRandomWordArray();

	//show blank spaces to represent each letter
	
	function guessLetter() {
		var guess = $("#guess-input").val();
		// var guess = "e"; // this has to be dynamic, something you can call everytime
		for (var i=0; i < wordArray.length; i++) {  // length = 8, but our i only goes up to 7
		if (guess == wordArray[i]) {
			console.log("Yes, there is an " + guess + ".");
			$(".correct-letters").append(guess);
		} else{
			console.log("There is not that letter!")
			$("#guess-input").val("");
		};
	}



 			// call word array.length, then allocate space for each.


			// where it starts, ends, increments 
			// i = index

		//get value from input field
		//loop: compare that letter to other letters in our array (for)
	}


	// 
	$(".guess-button").on("click", function(){
		guessLetter();	
	});

	
	

// guessLetter()



})


//html:  start + input field + 


// user typers
// random letters, 
//submit (limit to one letter in input field)
// we loop through letters in the world (if / else --> true? )