var calculator = {
	addition: function(a, b) {
		return a + b;
	},
	
	subtraction: function(a, b) {
		return a - b;
	},
	
	multiplication: function(a, b) {
		return a * b;
    },

	division: function(a, b) {
		return a / b;
	},

	remainder: function(a, b) {
		return a % b;
	},
	
	square:function(a) {
		return a * a;
	}
};

console.log(calculator.addition(4, 5))