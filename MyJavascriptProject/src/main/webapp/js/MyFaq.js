"use strict";
var $ = function(id) {
	return document.getElementById(id);
};

/*Event Handler for H2 Elements*/
var toggle = function() {
	
	/* Minimize other toggles open besides the clicked one */
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    for (var i = 0; i < h2Elements.length; i++ ) {
    	if(this != h2Elements[i] && h2Elements[i].className) {
    		h2Elements[i].className = "";
    		h2Elements[i].nextElementSibling.className = "";
    	}
    }
    
	/* Select the div next to h2 clicked */
	var h2 = this;
    var div = h2.nextElementSibling;

    /* Toggle plus and minus image in h2 elements by adding or removing a class */
    if (h2.className) {
        h2.className = "";
    } else {
        h2.className = "minus"; 
    }
    
    /* Toggle div visibility by adding or removing a class */
    if (div.className) {
    	div.className = "";
    } else {
    	div.className = "open"; 
    }
};

window.onload = function() {
    /* Get the H2 Elements inside Section faqs */
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    /* Assign Toogle function to each H2 Element */
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }  
};
