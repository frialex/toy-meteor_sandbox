Substance = new Meteor.Collection("substance");

if (Meteor.isClient) {

  Template.userInput.events({
    'submit form' : function (e,tmpl) {
      // template data, if any, is available in 'this'
	console.log("You pressed the button");

	debugger;
	var itemName = tmpl.find('#item').value;
	Substance.insert({name: itemName});

	//prevent page refresh
	return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
