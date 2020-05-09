function creareUser() {
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var dob = document.getElementById('dob').value;
	var password = document.getElementById('password').value;
	var phone = document.getElementById('phone').value;
	var address = document.getElementById('address').value;

	var userData = {
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		dob: dob,
		address: address,
		phone: phone
	}

	console.log(userData);

	alert('User ' + firstName + ' created successfully....');
}

function cancel() {
	alert('User not created...');
}