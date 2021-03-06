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
		//console.log(packedData);
		//unpack
		var email = packedData["email"]
		var password = packedData["password"]
		var profile = packedData["profile"]


		Accounts.createUser({
			email: email,
			password: password,
			profile: profile
		});
	},
	
	'allUsers': function() {
		console.log("CALLED ALLUSERS");
		return Meteor.users.find({});
	}
});

//Meteor.publish("allUsers", function(){
//	return Meteor.users.find({});
//});


Meteor.startup(() => {
  // code to run on server at startup	
	
	console.log("TOTAL USERS");
	console.log(Meteor.users.find().count());
	
	if (Meteor.users.find().count() == 0) {
		console.log("Zero accounts");

		profile = {};
                profile["firstName"] = "Root";
                profile["lastName"] = "Root";
                profile["role"] = "administrator";
                profile["active"] = true;
                profile["photo"] = "img/users/defaultuser.png";
		profile["title"] = "";

		//Immediately change password upon deploy!!!!!!
		Accounts.createUser({
			email: "root@root.com",
			password: "rootdeploy",
			profile: profile			
		});
	}

});
