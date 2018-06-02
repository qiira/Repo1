module.exports = function() {
	const TIMEOUT = 10000; //10 seconds

	this.Given(/^I'm on the Step 3 of the form$/, function () {
        client.isVisible('label[for=estimation]');
    });

	this.When(/^I select a range$/, function () {
	 	client.waitForVisible('.Select-placeholder', TIMEOUT);
     	client.click('.Select-placeholder');
     	//const randNum =  Math.floor(Math.random() * (5 - 1)) + 1;
     	//client.waitForVisible('[aria-activedescendant=react-select-9--option-3]', TIMEOUT); 
     	//client.click('[aria-activedescendant=react-select-9--option-3]');
     	client.waitForVisible('#react-select-9--value', TIMEOUT);
     	client.selectByAttribute('#react-select-9--value','aria-activedescendant','react-select-9--option-3'); 
	});

    this.Then(/^I should have access to Step 4 of the Your paying wallet form$/, function () {
            client.isVisible('#walletAddress');
    });

}