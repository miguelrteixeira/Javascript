"use strict";
var $ = function(id) {
	return document.getElementById(id);
};

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

// average rolls for a 6
var averageRolls = function() {
	var total = 0;
	var count = 0;
	var max = -Infinity;
	var rolls;
	
	// Using a for loop
	/* for(; count < 1000; count++) {
		rolls = 1;
		while ( getRandomNumber(6) !== 6 ) {
			rolls++;
		}
		total += rolls;
		if ( rolls > max ) max = rolls;
	} */
	
	// Using a while loop
	/* while ( count < 10000 ) {
		rolls = 1;
		while ( getRandomNumber(6) !== 6 ) {
			rolls++;
		}
		total += rolls;
		count++;
		if ( rolls > max ) max = rolls;
	} */
	
	// Using a do while loop
	do {
		rolls = 1;
		while ( getRandomNumber(6) !== 6 ) {
			rolls++;
		}
		total += rolls;
		count++;
		if ( rolls > max ) max = rolls;
	} while ( count < 10000 )
	
	var average = total / count;
	alert ("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
}

// display factors
var displayFactors = function() {
	var number = $("number").value;
	var primeNumbers = "";
	var countPrimes = 0;
	for ( var i = 1; i < number; i++ ) {
		if (determineIfPrime(i)) {
			primeNumbers += i + " ";
			countPrimes++;
		}
	}
	$("count").value = countPrimes;
	$("primes").value = primeNumbers;
}

// determine if a number is prime
function determineIfPrime(number) {
	var prime = true;
	for ( var i = 2; i < number; i++ ) {
		if ( number % i == 0 ) {
			return false;
		}
	}
	return true;
}
var processEntries = function() {
	// averageRolls();
	displayFactors();
	determineIfPrime();
}

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("number").focus();
};
