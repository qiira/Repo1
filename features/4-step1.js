module.exports = function() {
	const TIMEOUT = 15000; //15 seconds

	this.Given(/^I'm logged in$/, function () {
        client.isVisible('.header-user-email');
    });

	this.When(/^I fill the city of residence field$/, function () {
	 	client.waitForVisible('input#city', TIMEOUT);
	 	client.setValue('input#city', 'City of residence');
	});

	this.Given(/^I fill the address field$/, function () {
        client.waitForVisible('input#address1', TIMEOUT);
	 	client.setValue('input#address1', 'Address 10/9');
    });

    this.Given(/^I fill the zip code field$/, function () {
        client.waitForVisible('input#zipCode', TIMEOUT);
	 	client.setValue('input#zipCode', '00-2003');
    });

    this.Then(/^I should have access to Step "([^"]*)"$/, function (stepClass) {
        client.waitForExist(`${stepClass}.extended`, TIMEOUT);
        client.waitForVisible(`${stepClass}.extended`, TIMEOUT);
    });
}