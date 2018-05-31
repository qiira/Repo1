 module.exports = function() {
	const TIMEOUT = 10000; //10 seconds
	var assert = require('assert');
 
	this.Given(/^I have visited "([^"]*)" page$/, function (url) {
    	client.url(url);
   	});

	this.Given(/^I have provided invalid first name$/, function () {
        client.waitForVisible('input#firstName', TIMEOUT);
	 	client.setValue('input#firstName', '1');
	 	browser.leftClick('input#lastName');
       });

	this.Then(/^an error message display under the first name field$/, function () {
        client.waitForVisible('.input-field:nth-of-type(1) .tipbox.has-error', TIMEOUT);
        //const x = browser.getText('.input-field:nth-of-type(1) .tipbox.has-error');
        assert.equal(browser.getText('.input-field:nth-of-type(1) .tipbox.has-error'),'Your first name seems too short')
       });


	this.Given(/^I have provided invalid last name$/, function () {
        client.waitForVisible('input#lastName', TIMEOUT);
	 	client.setValue('input#lastName', '');
	 	client.leftClick('input#email');
    });

    this.Then(/^an error message display under the last name field$/, function () {
        client.waitForVisible('.input-field:nth-of-type(2) .tipbox.has-error', TIMEOUT);
        assert.equal(browser.getText('.input-field:nth-of-type(2) .tipbox.has-error'),'Please provide your last name')
       });

	this.Given(/^I have provided invalid e\-mail$/, function () {
        client.waitForVisible('input#email', TIMEOUT);
	 	client.setValue('input#email','test.pl');
	 	browser.leftClick('input#lastName');
    });


  	this.Then(/^an error message display under the e-mail field$/, function () {
        client.waitForVisible('.input-field:nth-of-type(3) .tipbox.has-error', TIMEOUT);
        assert.equal(browser.getText('.input-field:nth-of-type(3) .tipbox.has-error'),'Please provide a valid e-mail address')
       });


    this.Given(/^I have chosen an invalid country$/, function () {
     	client.waitForVisible('.Select-control', TIMEOUT);
     	client.click('.Select-control');
     	client.waitForVisible('#react-select-2--option-44', TIMEOUT); 
     	client.click('#react-select-2--option-44'); //China 
    });

    this.Then(/^an error message display under the country field$/, function () {
        client.waitForVisible('.input-field:nth-of-type(4) .tipbox.has-error', TIMEOUT);
        assert.equal(browser.getText('.input-field:nth-of-type(4) .tipbox.has-error'),'Residents of this country are not allowed to participate in the token sale')
       });

    this.Given(/^I accepted all the terms$/, function () {
        client.waitForVisible('label[for=areTermsAccepted]', TIMEOUT);
        client.click('label[for=areTermsAccepted]')
        client.waitForVisible('label[for=isCountryDeclarationAccepted]', TIMEOUT);
        client.click('label[for=isCountryDeclarationAccepted]')
    });

    this.Given(/^I clicked on the recaptcha$/, function () {
        client.waitForVisible('.g-recaptcha', TIMEOUT);
        client.click('.g-recaptcha');         
    });

    this.Then(/^the button "([^"]*)" should be active.$/, function (buttonSelector) {
        client.waitForVisible(buttonSelector, TIMEOUT);
        client.waitForExist(`${buttonSelector}[disabled]`, TIMEOUT, true);
    });

    this.When(/^I click on the "([^"]*)"$/, function (selector) {
        client.waitForExist(selector, TIMEOUT);
        client.waitForVisible(selector, TIMEOUT);
        client.click(selector);
    });

    this.Then(/^I should not be allowed to register$/, function () {
            client.isVisible('label[for=areTermsAccepted]');
    });
}
