FlowRouter.route('/ccdhhAdmin', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "ccdhhAdmin"});
    }
});
FlowRouter.route('/ccdhhCreateNewUser', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "ccdhhCreateNewUser"});
    }
});
