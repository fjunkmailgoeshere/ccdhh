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


FlowRouter.route('/ccdhhEditUser', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "ccdhhEditUser"});
    }
});
FlowRouter.route('/ccdhhChangePassword', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "ccdhhChangePassword"});
    }
});
FlowRouter.route('/ccdhhBackupData', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "ccdhhBackupData"});
    }
});
FlowRouter.route('/ccdhhAdminApproval', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "ccdhhAdminApproval"});
    }
});
