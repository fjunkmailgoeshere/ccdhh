Template.ccdhhBackupData.helpers({
	'isAdmin': function() {
		if(Meteor.user().profile["role"] == "administrator") {
			return true;
		}
		return false;
	}

});
