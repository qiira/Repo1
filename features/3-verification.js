const imaps = require('imap-simple');
let imap_connection = null;

imaps.connect(
	{imap: {
  user: 'wemtest8@gmail.com',
  password: process.env.WEMARK_PWD,
  host: 'imap.gmail.com',
  port: 993,
  tls: true
}
}).then(function (connection) {
    return connection.openBox('INBOX').then(function () {
        imap_connection = connection;
    });
});


module.exports = function() {
	const TIMEOUT = 30000; //10 seconds
	let pass = '';

	this.Given(/^I have received the one time password$/, function () {
    	client.waitUntil(function () {	
    		if(pass) {
    			return true;
    		}

    		if(!imap_connection) {
    			return false;
    		}

    		imap_connection.search([
            	'UNSEEN'
	        ], {
	            bodies: ['TEXT'],
	            markSeen: true
	        }).then(function (results) {
	        	if(results) {
		        	var bodies = results.map(function (res) {
		                return res.parts.filter(function (part) {
		                    return part.which === 'TEXT';
		                })[0].body;
	            	});

		        	const wemarkEmail = bodies[0];

		        	if(wemarkEmail) {
		        		const passwordString = wemarkEmail.match(/password\:\s(\w{16})/);

		        		if(passwordString[1]) {
		        			pass = passwordString[1];
		        		}
		        	}
	        	}
	        });


    		return !!pass;
	    }, TIMEOUT, 'didnt receive password code', 2000);
  	});

  	this.When(/^I fill the password field$/, function () {
    	client.waitForExist('#password', TIMEOUT);
    	client.waitForVisible('#password', TIMEOUT);
 		client.setValue('#password', pass);
    });

    this.Then(/^I should be logged in and redirected$/, function () {
        client.waitForVisible('#password', 10000, true);
        client.waitForExist('.my-account-page', TIMEOUT);
        client.waitForVisible('.my-account-page', TIMEOUT);

    });
}
