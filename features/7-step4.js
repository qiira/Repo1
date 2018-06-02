module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I'm on the Step 4 of the form$/, function () {
         client.isVisible('#walletAddress');
    });

	this.Given(/^I have provided a valid wallet address$/, function () {
        client.setValue('input#walletAddress', '11111116111e111111d1111111111f1111451111'); 
	});

    this.Then(/^I should have been successfully whitelisted$/, function () {
            client.isVisible('.whitelisting-success-box');
    });

}