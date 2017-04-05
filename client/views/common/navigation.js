Template.navigation.rendered = function(){

    // Initialize metisMenu
    $('#side-menu').metisMenu();

};

// Used only on OffCanvas layout
Template.navigation.events({

    'click .close-canvas-menu' : function(){
        $('body').toggleClass("mini-navbar");
    }

});

Template.navigation.helpers({
	//'firstName': function() {
	//	return Meteor.user();
	//}

	//'userPhoto': function() {
	//	//code here to get photo URL, but if none exists, use default
	//}
});

