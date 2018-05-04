@watch
Feature: Signing up
	Scenario: Properly signing up
		Given I have visited "http://dev-kyc-frontend-server.eu-west-1.elasticbeanstalk.com/signup" page
		And I have provided valid first name
		And I have provided valid last name
		And I have provided valid e-mail
		And I have choosen a country
		And I accepted all terms
		And I clicked on recaptcha
		Then the button "" should be active
		When I click on " "
		Then I should be registered and redirected 