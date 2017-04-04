Template.ccdhhChangePassword.events({
	'submit form': function(event) {
		event.preventDefault();

		var currentPassword = event.target.password.value;
		var newPassword = event.target.newpassword.value;
		var newPassword2 = event.target.newpassword2.value

		if (newPassword != newPassword2) { 
			alert("Passwords do not match");
		} else {
			Accounts.changePassword(currentPassword, newPassword, function(error) {
				if (!error) {
					alert("Change successful.");
				} else {
					alert(error);
				}
			});
		}
	}

});
