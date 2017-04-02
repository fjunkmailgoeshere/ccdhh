
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
		if (event.target.reason_ssp.checked == true) { 
			reason.push(event.target.reason_ssp.value);
		}	
		if (event.target.reason_hearing_assistive_technology.checked == true) { 
			reason.push(event.target.reason_hearing_assistive_technology.value);
		}	
		if (event.target.reason_telecommunications_equipment.checked == true) { 
			reason.push(event.target.reason_telecommunications_equipment.value);
		}	
		if (event.target.reason_alerting_devices.checked == true) { 
			reason.push(event.target.reason_alerting_devices.value);
		}	
		if (event.target.reason_general_resources.checked == true) { 
			reason.push(event.target.reason_general_resources.value);
		}	
		if (event.target.reason_research.checked == true) { 
			reason.push(event.target.reason_reearch.value);
		}	
		if (event.target.reason_websites.checked == true) { 
			reason.push(event.target.reason_websites.value);
		}	
		if (event.target.reason_information_on_navigating_systems.checked == true) { 
			reason.push(event.target.reason_information_on_navigating_systems.value);
		}	
		if (event.target.reason_law_enforcement.checked == true) { 
			reason.push(event.target.reason_law_enforcement.value);
		}	
		if (event.target.reason_schools.checked == true) { 
			reason.push(event.target.reason_schools.value);
		}	
		if (event.target.reason_workplaces.checked == true) { 
			reason.push(event.target.reason_workplaces.value);
		}	


		//Policy and Procedures advisement true/false
		var policy = false;
		if (event.target.policy.checked == true) { 
			policy = true;
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
			county: event.target.county.value,
			method: event.target.method.value,
			reasonforcontact: reason,
			persontakingcall: event.target.persontakingcall.value,
			results: event.target.results.value,
			notes: event.target.notes.value,
			policies: policy
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

