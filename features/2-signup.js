module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I'm still on the Registration page$/, function () {
        client.isVisible('label[for=areTermsAccepted]');
    });

	this.When(/^I have provided valid first name$/, function () {
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
        client.clearElement('input#email');
	 	client.setValue('input#email', `wemtest8+${randomNum}@gmail.com`);
    });

    this.Given(/^I have chosen a country$/, function () {
     	client.waitForVisible('.Select-control', TIMEOUT);
     	client.click('.Select-control');
     	client.waitForVisible('#react-select-2--option-0', TIMEOUT); 
     	client.click('#react-select-2--option-10'); //Afganistan
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