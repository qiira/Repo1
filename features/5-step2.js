module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I'm on the Step 2 of the form$/, function () {
        client.isVisible('.custom-option-icon');
    });

	this.When(/^I upload my "([^"]*)" verification document$/, function (path) {
		const dir = process.env.DIR_TO_IMAGE || './';

	 	client.waitForVisible('.uploader-input-container .uploader-input .upload-button', TIMEOUT);
	 	browser.chooseFile('input[type=file]', `${process.env.PWD}/${dir ? dir : ''}${path}`);
	 	browser.submitForm('input[type=file]');
	});
}