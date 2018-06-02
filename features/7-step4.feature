@watch
Feature: Filling the form
	Scenario: Properly filling Your paying wallet form
		Given I'm on the Step 4 of the form
		And I have provided a valid wallet address
		Then the button ".container:nth-of-type(3) .step-submit-button" should be active
		When I click on ".container:nth-of-type(3) .step-submit-button"
		Then I should have been successfully whitelisted