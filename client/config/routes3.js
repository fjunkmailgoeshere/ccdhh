//
// Trainings
//

FlowRouter.route('/ccdhhTrainings', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhTrainings"})
	}
});

FlowRouter.route('/ccdhhAddNewSession', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhAddNewSession"})
	}
});

FlowRouter.route('/ccdhhUploadSurveyResults', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhUploadSurveyResults"})
	}
});

FlowRouter.route('/ccdhhSurveyMode', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhSurveyMode"})
	}
});


//
// Reports Query
//

FlowRouter.route('/ccdhhReportsQuery', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhReportsQuery"})
	}
});

FlowRouter.route('/ccdhhQueryPage', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhQueryPage"})
	}
});

FlowRouter.route('/ccdhhQueryResults', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhQueryResults"})
	}
});


//
// Library
//

FlowRouter.route('/ccdhhLibrary', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhLibrary"})
	}
});

FlowRouter.route('/ccdhhTrainingMaterials', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhTrainingMaterials"})
	}
});

FlowRouter.route('/ccdhhTrainingModules', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhTrainingModules"})
	}
});

FlowRouter.route('/ccdhhTrainingAdmin', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhTrainingAdmin"})
	}
});

FlowRouter.route('/ccdhhCreateTrainingModule', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhCreateTrainingModule"})
	}
});

FlowRouter.route('/ccdhhEditTrainingSession', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhEditTrainingSession"})
	}
});

FlowRouter.route('/ccdhhEditTrainingModule', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhEditTrainingModule"})
	}
});

FlowRouter.route('/ccdhhViewSurveyResults', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhViewSurveyResults"})
	}
});


//
// Communication Access Assessment
//

FlowRouter.route('/ccdhhCommunicationAccess', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhCommunicationAccess"})
	}
});

FlowRouter.route('/ccdhhAssessment', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhAssessment"})
	}
});


//
// Login Stuff
//

FlowRouter.route('/ccdhhforgotpassword', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhforgotpassword"})
	}
});

FlowRouter.route('/ccdhhlockscreen', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhlockscreen"})
	}
});

FlowRouter.route('/ccdhhregister', {
	action: function() {
		BlazeLayout.render("mainLayout", {content: "ccdhhregister"})
	}
})
