Feature: Example to Demonstrate SQL Database Testing in Cypress

  I want to test my database

  Scenario: Create People table
    Given I want to create a people table
    Then I can validate that the table exist

  Scenario Outline: Insert a person in People table
    Given I want to create a person with id "<id>" and firstname "<firstname>" in people table
    Then I can validate that the "<firstname>" person exist

    Examples:
      | id | firstname |
      | 1  | joe       |
      | 2  | mary      |
      | 3  | olivia    |

  Scenario: Select all people from People table
    Given I want to select all people from People table
    Then I can validate that have 3 rows

  Scenario: Delete People table
    Given I want to delete a person table
    Then I can validate that the table not exist