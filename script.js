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
	window.onmouseover = document.getElementById("paragraph3").style.color = "#5642f4";
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

// //Erase Letters On Keyboard Clicks//
//
// function erase() {
// 	window.onkeydown = document.getElementById("erase") {
// 	switch (event.keyCode) {
// 		case 69:
// 			$(".e").css("display", "none");
// 			break;
// 		case 78:
// 			$(".n").css("display", "none");
// 			break;
// 		case 71:
// 			$(".g").css("display", "none");
// 			break;
// 		case 65:
// 			$(".a").css("display", "none");
// 			break;
// 		case 71:
// 			$(".g").css("display", "none");
// 			break;
// 		case 69:
// 			$(".e").css("display", "none");
// 			break;
// 	}
// }};

// document.getElementById("button1").addEventListener("click", changeColor1);
//
// function changeColor1() {
// 	document.getElementById("paragraph1").style.color = "#f44e42";
// }
//
// document.getElementById("button2").addEventListener("click", changeColor2);
//
// function changeColor2() {
// 	document.getElementById("paragraph2").style.color = "#41f4d6";
// }
//
// document.getElementById("button3").addEventListener("click", changeColor3);
//
// function changeColor3() {
// 	document.getElementById("paragraph3").style.color = "#9242f4";
// }