@watch
Feature: Filling the form
	Scenario: Properly filling Identity verification form
		Given I'm on the Step 2 of the form
		When I upload my "image.png" verification document
		Then the button ".step_CREDENTIALS .step-submit-button" should be active
		When I click on ".step_CREDENTIALS .step-submit-button"
		Then I should have access to Step ".step_ESTIMATION"