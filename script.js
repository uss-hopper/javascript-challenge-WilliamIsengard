//Change Paragraph 1 Color//

function button1() {
	window.onclick = document.getElementById("paragraph1").style.color = "#f44e42";
}

//Change Paragraph 2 Color//

function button2() {
	window.onclick = document.getElementById("paragraph2").style.color = "#41f4d6";
}

//Change Paragraph 3 Color//

function button3() {
	window.onclick = document.getElementById("paragraph3").style.color = "#d1f442";
}

//Change Font Type//

function button4() {
	window.onclick = document.getElementById("allParagraphs").style.fontFamily = "Comic Sans MS", cursive, sans-serif;
}

//Change Paragraph1 Color On Mouseover//

function mouseover1() {
	window.onmouseover = document.getElementById("paragraph1").style.color = "#5642f4";
}

//Change Paragraph1 Color On Mouseover//

function mouseover2() {
	window.onmouseover = document.getElementById("paragraph2").style.color = "#d1f442";
}

//Change Paragraph1 Color On Mouseover//

function mouseover3() {
	window.onmouseover = document.getElementById("paragraph3").style.color = "#f442b9";
}

//Word Highlighter//

function highlight(word) {
	var inputText = document.getElementById("highlightWord");
	var innerHTML = inputText.innerHTML;
	var index = innerHTML.indexOf(word);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0,index) + "<span class='highlighter'>" + innerHTML.substring(index,index+word.length) + "</span>" + innerHTML.substring(index + word.length);
		inputText.innerHTML = innerHTML;
	}
}

// Find and Replace Paragraph 1 //
function button1b() {
	window.onclick = document.getElementById("paragraph1").innerHTML="Resistance is futile!!!";
}

// Find and Replace Paragraph 2 //
function button2b() {
	window.onclick = document.getElementById("paragraph2").innerHTML="Resistance is futile!!!";
}

// Find and Replace Paragraph 3 //
function button3b() {
	window.onclick = document.getElementById("paragraph3").innerHTML="Resistance is futile!!!";
}

