function button1() {
	window.onclick = document.getElementById("paragraph1").style.color = "#f44e42";
}

function button2() {
	window.onclick = document.getElementById("paragraph2").style.color = "#41f4d6";
}

function button3() {
	window.onclick = document.getElementById("paragraph3").style.color = "#d1f442";
}

function button4() {
	window.onclick = document.getElementById("allParagraphs").style.fontFamily = "Comic Sans MS", cursive, sans-serif;
}


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

function highlight(word) {
	var inputText = document.getElementById("highlightWord");
	var innerHTML = inputText.innerHTML;
	var index = innerHTML.indexOf(word);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0,index) + "<span class='highlighter'>" + innerHTML.substring(index,index+word.length) + "</span>" + innerHTML.substring(index + word.length);
		inputText.innerHTML = innerHTML;
	}
}
