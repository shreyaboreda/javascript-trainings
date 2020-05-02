function add(num1, num2) {
	return num1 + num2;
}

function hello() {
	console.log('hi1...');
	console.log('hi2...');
	console.log('hi3...');
	console.log('hi4...');
	console.log('hi5...');
	console.log('hi6...');
	alert('Hello..');
}

// console.log(add(12, 15));

function sum() {
	// var arguments = [3, 6, 7, 34, 20, 3,4 ,5, 5, 5, 64,36];
	var result = 1;
	for (var i = 0; i < arguments.length; i++) {
		result *= arguments[i];
	}
	return result;
}

console.log(sum(3, 6, 7, 5));