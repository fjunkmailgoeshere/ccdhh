/* code here */


Template.ccdhhAddNewSession.events({
	'submit form': function(event) {
		event.preventDefault();
		
//Put everything into a dictionary that will become the JSON object inserted into the DB
		var data = {
			modules: event.target.modules.value,
			//dateoftraining: event.target.dateoftraining.value,
			//titleoftraining: event.target.titleoftraining.value,
			//numberofpeopleattended: event.target.numberofpeopleattended.value,
			//activitytype: activitytype,
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
		//ccdhhAddNewSession.insert(data);
		
	}
	
});
	
Template.ccdhhAddNewSession.rendered = function(){
	
 
		
	}