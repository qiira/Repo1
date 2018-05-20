module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I have visited "([^"]*)" page$/, function (url) {
    	client.url(url);
   	});

	this.Given(/^I have provided valid first name$/, function () {
	 	client.waitForVisible('input#firstName', TIMEOUT);
	 	client.setValue('input#firstName', 'First');
	});

	this.Given(/^I have provided valid last name$/, function () {
        client.waitForVisible('input#lastName', TIMEOUT);
	 	client.setValue('input#lastName', 'Last');
    });

	this.Given(/^I have provided valid e\-mail$/, function () {
		const randomNum = Math.round(Math.random()*100000);

        client.waitForVisible('input#email', TIMEOUT);
	 	client.setValue('input#email', `wemtest8+${randomNum}@gmail.com`);
    });

    this.Given(/^I have choosen a country$/, function () {
     	client.waitForVisible('.Select-control', TIMEOUT);
     	client.click('.Select-control');
     	client.waitForVisible('#react-select-2--option-0', TIMEOUT); 
     	client.click('#react-select-2--option-0'); //Afganistan
    });
    
    this.Given(/^I accepted all terms$/, function () {
        client.waitForVisible('label[for=areTermsAccepted]', TIMEOUT);
        client.click('label[for=areTermsAccepted]')
        client.waitForVisible('label[for=isCountryDeclarationAccepted]', TIMEOUT);
        client.click('label[for=isCountryDeclarationAccepted]')
    });

    this.Given(/^I clicked on recaptcha$/, function () {
        client.waitForVisible('.g-recaptcha', TIMEOUT);
        client.click('.g-recaptcha');         
    });

    this.Then(/^the button "([^"]*)" should be active$/, function (buttonSelector) {
        client.waitForVisible(buttonSelector, TIMEOUT);
        client.waitForExist(`${buttonSelector}[disabled]`, TIMEOUT, true);
    });

    this.When(/^I click on "([^"]*)"$/, function (selector) {
        client.waitForExist(selector, TIMEOUT);
        client.waitForVisible(selector, TIMEOUT);
        client.click(selector);
    });

    this.Then(/^I should be registered and redirected$/, function () {
           client.waitForExist('.password-form', TIMEOUT);
           client.waitForVisible('.password-form', TIMEOUT);
           const url = client.getUrl();
           
           if(url.indexOf('verification') <= 0) {
                throw new Error('Didnt redirect to sign in page.');
           }
    });

}