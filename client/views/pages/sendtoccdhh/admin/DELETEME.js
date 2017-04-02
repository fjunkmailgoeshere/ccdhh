
Template.ccdhhDeleteMe.events({
	'submit form': function(event) {
		event.preventDefault();

		email = event.target.email.value;
		password = event.target.password.value;

		profile = {}
		profile["firstName"] = event.target.firstname.value;
		profile["lastName"] = event.target.lastname.value;
		profile["role"] = event.target.account.value;

	        Accounts.createUser({
	            email: email,
	            password: password,
		    profile: profile
	        }, function(error) {

			if (error) { 
				alert(error.reason);
			} else {
				alert("User creation successful");
			}
		});
	}
});
