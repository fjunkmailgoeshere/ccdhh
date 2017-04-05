//import { Meteor } from 'meteor/meteor';

Consults = new Meteor.Collection('consults');
Trainings = new Meteor.Collection('trainings');

Meteor.methods({
	'insertConsults': function(data) {
		var currentUser = Meteor.userId();
		if (currentUser) {
			data["userId"] = currentUser;
		} else {
			throw new Meteor.Error("not-logged-in", "You're not logged-in.");
		}
		return Consults.insert(data);

	},

	'insertTrainings': function(data) {
		var currentUser = Meteor.userId();
		if (currentUser) {
			data["userId"] = currentUser;
		} else {
			throw new Meteor.Error("not-logged-in", "You're not logged-in.");
		}
		return Trainings.insert(data);

	},

	'createUserFromAdmin': function(packedData) {
		console.log(packedData);
		//unpack
		var email = packedData["email"]
		var password = packedData["password"]
		var profile = packedData["profile"]


		Accounts.createUser({
			email: email,
			password: password,
			profile: profile
		});
	}
});



Meteor.startup(() => {
  // code to run on server at startup
});
