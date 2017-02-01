
$(document).ready(function(){
	console.log("ready!");
	
	var words = ["feminism", "unity"];

	function startGame(){
		//happens on user click button
		//hide button
		//reveal input box + blankFields
		//choose random word
	}

	function chooseRandomWordArray()  {   // objects v. methods() v. functions weNamedFunction  // method() is passed ONTO an object. ie: .log needs to be attached to an object (log)
	// RETURN a random word from our 'words' array (as an array: F, E, M)
	// math.Random math.Floor 
	console.log(words[0].split(""));
	return words[0].split("");  // we could do "e" every "e" encounters
	// a return statement always kills a function. it must be the LAST thing. "return" can kill any other code from executing.
	}

	var wordArray = chooseRandomWordArray();

	function guessLetter() {
		var guess = "e"; // this has to be dynamic, something you can call everytime

		for (var i=0; i < wordArray.length; i++) {  // length = 8, but our i only goes up to 7
			debugger
		if (guess == wordArray[i]) {
			console.log("Yes, there is an " + guess + ".");
		} else{
			console.log("nope!")
		};
		}

			// where it starts, ends, increments 
			// i = index

		//get value from input field
		//loop: compare that letter to other letters in our array (for)
	}


// 

	

guessLetter()



})


//html:  start + input field + 


// user typers
// random letters, 
//submit (limit to one letter in input field)
// we loop through letters in the world (if / else --> true? )