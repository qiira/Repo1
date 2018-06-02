@watch
Feature: Filling the form
	Scenario: Properly filling Personal Details form
		Given I'm logged in
		When I fill the city of residence field
		And I fill the address field
		And I fill the zip code field
		Then the button ".container:nth-of-type(7) .step-submit-button" should be active
		When I click on ".container:nth-of-type(7) .step-submit-button"
		Then I should have access to Step 2 of the Identity verification form