
/* code here */


Template.ccdhhConsults.events({
	'submit form': function(event) {
		event.preventDefault();

		//Check the checkboxes for reasonforcontact
		var reason = [];
		if (event.target.reason_interpreters.checked == true) { 
			reason.push(event.target.reason_interpreters.value);
		}
		if (event.target.reason_cart.checked == true) { 
			reason.push(event.target.reason_cart.value);
		}				

		//Put everything into a dictionary that will become the JSON object inserted into the DB
		var data = {
			date: event.target.date.value,
			name: event.target.name.value,
			gender: event.target.gender.value,
			age: event.target.age.value,
			hearingstatus: event.target.hearingstatus.value,
			ethnicity: event.target.ethnicity.value,
			entity: event.target.entity.value,
			reasonforcontact: reason,
			persontakingcall: event.target.persontakingcall.value,
			notes: event.target.notes.value
		};


		//Output the contents of what will be inserted into the DB for diagnostic purposes
		//Remove on final deployment
		console.log(data);

		//Insert the data object into the DB
		Consults.insert(data);

	}
	
});

Template.ccdhhConsults.rendered = function() {
    $('#data_1 .input-group.date').datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true
    });
}
