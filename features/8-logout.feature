@watch
Feature: Logging out
	Scenario: Properly logging out from the page
		Given I'm logged in
		When I click on ".header-user-links" button
		Then I should be logged out