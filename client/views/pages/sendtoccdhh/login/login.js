Template.ccdhhLogin.events({
	'submit form': function(event) {
		event.preventDefault();
		alert("called");

		var email = $('[name=Username]').val();
		var password = $('[name=Password]').val()

		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				alert(error.reason);
			} else {
				FlowRouter.go("/main");
			}
		});
	}
});
