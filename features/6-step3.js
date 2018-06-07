module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I'm on the Step 3 of the form$/, function () {
        client.isVisible('label[for=estimation]');
    });

	this.When(/^I select a range$/, function () {
	 	client.waitForVisible('.Select-placeholder', TIMEOUT);
     	client.click('.Select-placeholder');
     	//const randNum =  Math.floor(Math.random() * (5 - 1)) + 1;
     	client.waitForVisible('.Select-option', TIMEOUT); 
     	client.click('.Select-option');
	});
}