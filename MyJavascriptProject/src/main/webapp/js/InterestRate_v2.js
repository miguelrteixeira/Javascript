/**
 * 
 */

"use strict";

var dataShown = "";

var $ = function(id) {
	return document.getElementById(id);
}

window.onload = function() {
	$("interestRate_result").onclick = calculateInterestRate;
	$("interestRate_detailed").onclick = seeInterestRateDetailed;
	$("interestRate_clear").onclick = clearData;
	$("investment").focus();
}

function calculateInterestRate() {
	var futureValue;
	var investment = $("investment").value;
	var interestRate = $("interestRate").value;
	var years = $("years").value;
	var isValid = true;
	
	/* Validate Data */
	isValid = validateData(investment, "investment_error");
	isValid = validateData(interestRate, "interestRate_error");
	isValid = validateData(years, "years_error");
	
	/* Calculate Interest Rate */
	if (isValid) {
		futureValue = parseFloat(investment);
		interestRate = parseFloat(interestRate / 100);
		for(var i=1; i <= years; i++) {
			futureValue += futureValue * interestRate;
			dataShown += "Year: " + i + ", Future Value: " + futureValue.toFixed(2) + ".\n" 
		}
		$("futureValue").value = futureValue.toFixed(2);
		$("interestRate_detailed").style.visibility  = "visible";
	} else {
		$("futureValue").value = "";
		$("interestRate_detailed").style.visibility  = "hidden";
	}
}

function seeInterestRateDetailed() {
	alert(dataShown);
	var test = document.forms[1];
	if(document.forms[1] != null) {
		alert("exists");
	} else {
		alert("not exist");
	}
}

function validateData(input, span) {
	if(input === "") {
		$(span).firstChild.nodeValue = "Required!";
		return false;
	} else if(isNaN(input)) {
		$(span).firstChild.nodeValue = "Please insert a numeric value!";
		return false;
	} else if (input < 0) {
		$(span).firstChild.nodeValue = "Please insert a value greather than 0!";
		return false;
	} else {
		$(span).firstChild.nodeValue = "*";
		return true;
	}
}

function clearData() {
	$("investment").value = "";
	$("investment_error").firstChild.nodeValue = "*";
	$("interestRate").value = "";
	$("interestRate_error").firstChild.nodeValue = "*";
	$("years").value = "";
	$("years_error").firstChild.nodeValue = "*";
	$("futureValue").value = "";
	$("interestRate_detailed").style.visibility  = "hidden";
}