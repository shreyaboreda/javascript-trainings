function lesser(a,b,c){
	if(a<b){
		if(a<c){
			console.log(a);
		}
		else{
			console.log(c);
		}
	}
	else{
		if(b<c){
			console.log(b);
		}
		else{
			console.log(c);
		}
	}
}

console.log(lesser(17,112,115))