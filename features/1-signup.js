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
}