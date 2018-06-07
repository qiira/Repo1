@watch
Feature: Filling the form
	Scenario: Properly filling Approximate contribution form
		Given I'm on the Step 3 of the form
		When I select a range
		Then the button ".step_ESTIMATION .step-submit-button" should be active
		When I click on ".step_ESTIMATION .step-submit-button"
		Then I should have access to Step ".step_WALLET"