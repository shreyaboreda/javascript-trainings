function multiples(num,limit){
	for(i = 1;i <= limit;i++){
		if(num*i <=limit){
			console.log(num*i)
		}
	}
}


console.log(multiples(14,100))