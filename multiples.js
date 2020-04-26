function multiples(a){
	var limit = 50;
	for(i = 1;i <= limit ;i++){
		if(a*i <= limit){
			console.log(a*i)
		}
	}
}

console.log(multiples(6))