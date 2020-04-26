function createPattern(num) {
	for(var i = 1; i <= num; i++) {
		var patterStr = '';
		for(var j = 1; j <= i; j++) {
			patterStr += '*\t'
		}
		console.log(patterStr);
	}
}

createPattern(5);




