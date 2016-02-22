"use strict";
var $ = function(id) {
	return document.getElementById(id);
};

var processEntries = function() {   
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields";
    var contact = "Text";
    
    var email = $("emailAddress").value;
    var phone = $("phone").value;
    var country = $("country").value;
    /*var countryText = $("country>option:selected").innerHtml;*/
    var comments = $("comments").value.trim();
    
    if ($("email").checked) { contact = "Email"; }
    if ($("mobile").checked) { contact = "Mobile Phone"; }
    if ($("none").checked) { contact = "None"; }
    var terms = $("terms").checked;
    
    console.log("Validation: Beginning.");
    if (email == "") {
        email = required;          
        header = msg;
    }
	if (phone == "") {
        phone = required;         
        header = msg;
    }
	if (country == "") {
        country = required;         
        header = msg;
    }
    if (terms == false) {
        terms = required;
        header = msg;
    }
    console.log("Validation: Ending.");
    
    console.log("Writing Info: Beginning.");
    $("registerHeader").firstChild.nodeValue = header;
    if (header == msg) {     
        html = html + "<tr><td class='labelTd'>Email:</td><td class='valueTd'>" + email + "</td></tr>";
        html = html + "<tr><td class='labelTd'>Phone:</td><td class='valueTd'>" + phone + "</td></tr>";
        html = html + "<tr><td class='labelTd'>Country:</td><td class='valueTd'>" + country + "</td></tr>";
        html = html + "<tr><td class='labelTd'>Contact:</td><td class='valueTd'>" + contact + "</td></tr>";
        if(comments.length) {
        	html = html + "<tr><td class='labelTd'>Comments:</td><td class='valueTd'>" + comments + "</td></tr>";
        }
        html = html + "<tr><td class='labelTd'>Terms:</td><td class='valueTd'>" + terms + "</td></tr>";
        $("registerInfo").innerHTML = html;
    } else {
        $("registerInfo").innerHTML = "";
        $("registerForm").submit();
    }
    console.log("Writing Info: Ending.");
    
};

var resetForm = function() {
    console.log("Reset Form: Beginning.");
	$("registerForm").reset();
    $("registerHeader").firstChild.nodeValue = "";
    $("registerInfo").innerHTML = "";
    $("email").focus();
    console.log("Reset Form: Ending.");
};

window.onload = function() {
    $("registerSubmit").onclick = processEntries;
    $("resetForm").onclick = resetForm;    
    $("email").focus();
};