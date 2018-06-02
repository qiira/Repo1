@watch
Feature: Signing in with one time password
	Scenario: Properly signing in
		Given I have received the one time password
		When I fill the password field
		And I clicked on recaptcha
		Then the button ".wemark-sign-up-button" should be active
		When I click on ".wemark-sign-up-button"
		Then I should be logged in and redirected 