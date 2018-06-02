module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I'm logged in$/, function () {
        client.isVisible('.header-user-email');
    });

    this.Then(/^I should be logged out$/, function () {
            client.isVisible('.active');
            browser.closeApp();
    });

}