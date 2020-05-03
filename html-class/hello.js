function hello() {
	var helloText = document.getElementById('hello-text');
	helloText.innerHTML = 'New Text ndbvhjg ejger erhl lerjh lerj herg vljrejg ljwrehjd ljff lfljd fljdsf ljf...'
	console.log(helloText);
	console.log('hi2...');
	console.log('hi3...');
	console.log('hi4...');
	console.log('hi5...');
	console.log('hi6...');
	// alert(helloText.textContent);
}

function changeColor1(colorName) {
	var element1 = document.getElementById('hello-text');
	element1.style.color = colorName;
}

function changeColor2(colorName) {
	var element2 = document.getElementById('hi-text');
	element2.style.color = colorName;
}

function sayHi() {
	name = document.getElementById('firstName').value;
	alert('Hi ' + name);
}