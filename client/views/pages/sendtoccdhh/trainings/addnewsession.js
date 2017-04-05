/* code here */


Template.ccdhhAddNewSession.events({
	'submit form': function(event) {
		event.preventDefault();
		
		
		//Checkboxes for Activity Type
		var activity = [];
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
		
		
		
		//Checkboxes for Trainer
		var trainer = [];
		if (event.target.trainer_trainer1.checked == true) {
			trainer.push(event.target.trainer_trainer1.value);
		}
		if (event.target.trainer_trainer2.checked == true) {
			trainer.push(event.target.trainer_trainer2.value);
		}
		if (event.target.trainer_trainer3.checked == true) {
			trainer.push(event.target.trainer_trainer3.value);
		}
		if (event.target.trainer_trainer4.checked == true) {
			trainer.push(event.target.trainer_trainer4.value);
		}
		if (event.target.trainer_trainer5.checked == true) {
			trainer.push(event.target.trainer_trainer5.value);
		}
		if (event.target.trainer_trainer6.checked == true) {
			trainer.push(event.target.trainer_trainer6.value);
		}
		if (event.target.trainer_trainer7.checked == true) {
			trainer.push(event.target.trainer_trainer7.value);
		}
		if (event.target.trainer_trainer8.checked == true) {
			trainer.push(event.target.trainer_trainer8.value);
		}
		
		
		
		//Checkboxes for Training Materials Used
		var materials = [];
		if (event.target.materials_powerpoint.checked == true) {
			materials.push(event.target.materials_powerpoint.value);
		}
		if (event.target.materials_surveys.checked == true) {
			materials.push(event.target.materials_surveys.value);
		}
		if (event.target.materials_videos.checked == true) {
			materials.push(event.target.materials_videos.value);
		}
		if (event.target.materials_scenarios.checked == true) {
			materials.push(event.target.materials_scenarios.value);
		}
		if (event.target.materials_roleplay.checked == true) {
			materials.push(event.target.materials_roleplay.value);
		}
		
		//Convert date string to date object before inserting into DB
		theTrainingDate = new Date(event.target.dateoftraining.value);
		
		
		
		//Put everything into a dictionary that will become the JSON object inserted into the DB
		var data = {
			modules: event.target.modules.value,
			dateoftraining: theTrainingDate,
			titleoftraining: event.target.titleoftraining.value,
			numberofattendees: event.target.numberofattendees.value,
			activitytype: activity,
			locationoftraining: event.target.locationoftraining.value,
			county: event.target.county.value,
			lengthoftraining: event.target.lengthoftraining.value,
			trainer: trainer,
			trainingmaterialsused: materials,
			trainingnotes: event.target.trainingnotes.value
				
		};
		
		//Output the contents of what will be inserted into the DB for diagnostic purposes
		//Remove on final deployment
		console.log(data);
		
		//Insert the data object into the DB
		//AddNewSession.insert(data);

		Meteor.call('insertTrainings', data, function(error, results) {
			if (error) {
				alert(error);
			} else {
				alert("Data inserted into database");
			}
		});
		
	}
	
});	
	
Template.ccdhhAddNewSession.rendered = function(){
	
 
}
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
