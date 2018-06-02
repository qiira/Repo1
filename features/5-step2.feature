@watch
Feature: Filling the form
	Scenario: Properly filling Identity verification form
		Given I'm on the Step 2 of the form
		When I upload my "C:\Users\Asia\Desktop\test_passport.jpg" verification document
		Then the button ".container:nth-of-type(4) .step-submit-button" should be active
		When I click on ".container:nth-of-type(4) .step-submit-button"
		Then I should have access to Step 3 of the Approximate contribution form