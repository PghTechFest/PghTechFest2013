Feature: Application can provide random values

  Background: Application starts with demo mode turned off
    Given the application launches
    And I have demo mode turned off

  Scenario: The game will not be happy without numbers
    When I press the submit button
    Then I do not see "Congrats, you solved the puzzle"

  Scenario: The game will not always have the same solution
    Given I enter all of the correct demo numbers
    When I press the submit button
    Then I do not see "Congrats, you solved the puzzle"
