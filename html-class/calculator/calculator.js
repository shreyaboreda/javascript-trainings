var numbersList = [];
var operator = '';
var total = '';
var lastEntered = 'number';
var typedNumber = '';

function setValue(num) {
	typedNumber = typedNumber + '' + num;
	document.getElementById('result').value = typedNumber;
}

function operation(symbol) {
	operator = symbol;
	lastEntered = 'operator';
	switch(operator) {
		case '+':
			total += typedNumber;
			break;
		case '-':
			total -= typedNumber;
			break;
		case '*':
			total *= typedNumber;
			break;
		case '/':
			total /= typedNumber;
			break;
		case '%':
			total %= typedNumber;
			break;
		default:
			total = result + '' + num;
	}
	typedNumber = '';
}

function calculate() {
	document.getElementById('result').value = total;
}

// calculator = {
// 	add: function(numbersList) {
// 		var res = 0;
// 		for(var i=0; i < numbersList.length; i++) {
// 			res += numbersList[i];
// 		}
// 		return res;
// 	},
// 	sub: function(numbersList) {
// 		return numbersList[0] - numbersList[1];
// 	},
// 	mul: function(numbersList) {
// 		var res = 1;
// 		for(var i=0; i < numbersList.length; i++) {
// 			res *= numbersList[i];
// 		}
// 		return res;
// 	},
// 	div: function(numbersList) {
// 		return numbersList[0] / numbersList[1];
// 	},
// 	rem: function(numbersList) {
// 		return numbersList[0] % numbersList[1];
// 	}
// }

function clearRes() {
	document.getElementById('result').value = '';
}