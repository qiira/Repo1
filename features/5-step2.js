module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I'm on the Step 2 of the form$/, function () {
        client.isVisible('.custom-option-icon');
    });

	this.When(/^I upload my "([^"]*)" verification document$/, function (path) {
	 	client.waitForVisible('.uploader-input', TIMEOUT);
	 	client.element('.uploader-input').keys(path);
	});


    this.Then(/^I should have access to Step 3 of the Approximate contribution form$/, function () {
            client.isVisible('label[for=estimation]');
    });

}