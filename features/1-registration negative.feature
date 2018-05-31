@watch
Feature: Registration - negative testing
	Scenario: Improperly registration
		Given I have visited "http://dev-kyc-frontend-server.eu-west-1.elasticbeanstalk.com/signup" page
		And I have provided invalid first name
		Then an error message display under the first name field
		When I have provided invalid last name
		Then an error message display under the last name field
		When I have provided invalid e-mail
		Then an error message display under the e-mail field
		When I have chosen an invalid country
		Then an error message display under the country field
		When I accepted all the terms
		And I clicked on the recaptcha
		Then the button ".wemark-sign-up-button" should be active.
		When I click on ".wemark-sign-up-button"
		Then I should not be allowed to register