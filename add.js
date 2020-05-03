function add(num1, num2) {
	return num1 + num2;
}

// console.log(add(12, 15));

function sum() {
	// var arguments = [3, 6, 7, 34, 20, 3,4 ,5, 5, 5, 64,36];
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

console.log(sum(3, 6, 7, 5, 9, 45, 20));