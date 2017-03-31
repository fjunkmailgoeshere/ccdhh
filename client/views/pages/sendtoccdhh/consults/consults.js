
/* code here */
/*Template.ccdhhConsults.rendered=function() {

// Initialize datapicker --- fix later

/*
	$('#data_1 .input-group.date').datepicker({
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true
});
*/
	
    // Initialize i-check plugin
//    $('.i-checks').iCheck({
 //       checkboxClass: 'icheckbox_square-green',
 //       radioClass: 'iradio_square-green'
 //   });



//Consults = new Mongo.Collection('consults');

Template.ccdhhConsults.events({
	'submit form': function(event) {
		event.preventDefault();

		//Check the checkboxes for reasonforcontact
		var reason = [];
		alert(event);

		/*if (event.target.interpreters.checked == true) { 
			reason.push(event.target.communicationaccess.value);
		}
		if (event.target.cart.checked == true) { 
			reason.push(event.target.hearingassistivetechnology.value);
		}
		if (event.target.ssp.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.hearingassistivetechnology.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.telecommunicationsequipment.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.alertingdevices.checked == true) { 
			reason.push(event.target.cart.value);
		}
		if (event.target.referral.checked == true) { 
			reason.push(event.target.informationorreferral.value);
			
		}
		if (event.target.research.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.websites.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.laws.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.informationonnavigatingsystems.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.lawenforcement.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.schools.checked == true) { 
			reason.push(event.target.cart.value);
			
		}
		if (event.target.workplace.checked == true) { 
			reason.push(event.target.cart.value);
		}*/
		

		// B/C I temporarily commented out all the stuff above, this will print an empty array to console
		console.log(reason)


		// All items commented out are commented out because there is no name="" for them in the HTML file.  (No equivalent representation in the HTML).  It's like saying "Go to San Francisco to get a slice of bread" but San Francisco doesn't exist.  So it's searching for something that doesn't exist, and crashes.  You can change the stuff here, or in the HTML file, but they both have to connect or the script won't work.  I've had them commented out so that this script can run.

		var data = {
			date: event.target.dateofcontact.value,
			name: event.target.personsname.value,
			entity: event.target.entity.value,
			hearingstatus: event.target.hearingstatus.value,
			methodofcontact: event.target.methodofcontact.value,
			reasonforcontact: event.target.reasonforcontact.value,
			age: event.target.age.value,
			gender: event.target.gender.value,
			persontakingcall: event.target.persontakingcall.value,
			resultofinquiry: event.target.resultofinquiry.value,
			technicalassistancenotes: event.target.technicalassistancenotes.value
		};

		console.log(data);
		Consults.insert(data);

	}
	
});
consults.js
Open with
Displaying consults.js.