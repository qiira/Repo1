@watch
Feature: Filling the form
	Scenario: Properly filling Approximate contribution form
		Given I'm on the Step 3 of the form
		When I select a range
		Then the button ".container:nth-of-type(3) .step-submit-button" should be active
		When I click on ".container:nth-of-type(3) .step-submit-button"
		Then I should have access to Step 4 of the Approximate contribution form