@watch
Feature: Signing up
	Scenario: Properly signing up
		Given I'm still on the Registration page
		When I have provided valid first name
		And I have provided valid last name
		And I have provided valid e-mail
		And I have chosen a country
		And I clicked on recaptcha
		Then the button ".wemark-sign-up-button" should be active
		When I click on ".wemark-sign-up-button"
		Then I should be registered and redirected 