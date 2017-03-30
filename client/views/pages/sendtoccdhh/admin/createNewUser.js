

Template.ccdhhCreateNewUser.events({
	'submit form': function(event) {
		event.preventDefault();

		email = event.target.email.value;
		password = event.target.password.value;

		alert(password);

		profile = {}
		profile["firstName"] = event.target.firstname.value;
		profile["lastName"] = event.target.lastname.value;
		profile["role"] = event.target.account.value;

	        Accounts.createUser({
	            email: email,
	            password: password,
		    profile: profile
	        });
	}
});
