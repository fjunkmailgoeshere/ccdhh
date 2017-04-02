/* code here */


Template.ccdhhAddNewSession.events({
	'submit form': function(event) {
		event.preventDefault();
		
		//Checkboxes for Activity Type
		var reason = [];
		if (event.target.activity_activity1.checked == true) {
			activity.push(event.target.activity_activity1.value);
		}
		if (event.target.activity_activity2.checked == true) {
			activity.push(event.target.activity_activity2.value);
		}
		if (event.target.activity_activity3.checked == true) {
			activity.push(event.target.activity_activity3.value);
		}
		if (event.target.activity_activity4.checked == true) {
			activity.push(event.target.activity_activity4.value);
		}
		if (event.target.activity_activity5.checked == true) {
			activity.push(event.target.activity_activity5.value);
		}
		
		
		//Put everything into a dictionary that will become the JSON object inserted into the DB
		var data = {
			modules: event.target.modules.value,
			dateoftraining: event.target.dateoftraining.value,
			titleoftraining: event.target.titleoftraining.value,
			numberofattendees: event.target.numberofattendees.value,
			activitytype: activity,
			//locationoftraining: event.target.locationoftraining.value,
			//county: event.target.county.value,
			//lengthoftraining: event.target.lengthoftraining.value,
			//trainer: trainer,
			//trainingmaterialsused: trainingmaterialsused,
			//trainingnotes: event.target.trainingnotes.value
				
		};
		
		//Output the contents of what will be inserted into the DB for diagnostic purposes
		//Remove on final deployment
		console.log(data);
		
		//Insert the data object into the DB
	AddNewSession.insert(data);
		
	}
	
	});	
	
Template.ccdhhAddNewSession.rendered = function(){
	
 
	}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	