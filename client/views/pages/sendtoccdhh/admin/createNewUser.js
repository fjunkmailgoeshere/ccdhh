Template.ccdhhCreateNewUser.helpers({
        'isAdmin': function() {
                if(Meteor.user().profile["role"] == "administrator") {
                        return true;
                }
                return false;
        }

});


Template.ccdhhCreateNewUser.events({
	'submit form': function(event) {
		event.preventDefault();
		email = event.target.email.value;
		password = event.target.password.value;
		password2 = event.target.password2.value;

		profile = {}
		profile["firstName"] = event.target.firstname.value;
		profile["lastName"] = event.target.lastname.value;
		profile["role"] = event.target.account.value;	
		profile["active"] = true;
		profile["photo"] = "img/users/defaultuser.png";
		profile["title"] = "";

		//first do form checks
		var passed = true;
		if (password != password2) {
			alert("Passwords do not match");
			passed = false;
		}
		if (password == "") {
			alert("Password required");
			passed = false;
		}
		

		//Later, add check to use defaultuser.png if no user image specified
		//And upload and etc

		if (passed == true) {

			packedData = {}
			packedData["email"] = email;
			packedData["password"] = password;
			packedData["profile"] = profile;
	
			Meteor.call('createUserFromAdmin', packedData, function(error){
				if (error) { 
					alert(error.reason);
				} else {
					alert("User creation successful");
				}

			});
		} else {
			//extra code here
		}
	}
});
