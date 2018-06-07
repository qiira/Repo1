module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

    this.Then(/^I should be logged out$/, function () {
        client.waitForExist('.header-user-name', TIMEOUT, true);
        client.waitForVisible('.header-user-name', TIMEOUT, true);
    });

}