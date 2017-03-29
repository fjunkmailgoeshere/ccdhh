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
})