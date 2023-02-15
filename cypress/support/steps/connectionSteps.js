import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
const dbName = Cypress.env("dbName");

Given("I want to create a people table", () => {
  const query = "CREATE TABLE People (PeopleId int, FirstName varchar(255));";
  cy.task("queryDatabase", { dbName, query });
});

Then("I can validate that the table exist", () => {
  const query = "CALL GetAllPeople();";
  cy.task("queryDatabase", { dbName, query }).then((result) => {
    cy.log("length", result[0].length);
    expect(result[0].length).to.eq(0);
  });
});

Given(
  "I want to create a person with id {string} and firstname {string} in people table",
  (id, firstName) => {
    const query =
      "INSERT INTO People (PeopleId, FirstName) VALUES (" +
      id +
      ",'" +
      firstName +
      "');";
    cy.task("queryDatabase", { dbName, query }).then((result) => {
      expect(result.affectedRows).to.equal(1);
    });
  }
);

Then("I can validate that the {string} person exist", (firstname) => {
  const query =
    "SELECT FirstName FROM People WHERE FirstName = '" + firstname + "';";
  cy.task("queryDatabase", { dbName, query }).then((result) => {
    cy.log("result", result[0]);
    expect(result[0].FirstName).to.eq(firstname);
  });
});

Given("I want to select all people from People table", () => {});

Then("I can validate that have 3 rows", () => {
  const query = "CALL GetAllPeople();";
  cy.task("queryDatabase", { dbName, query }).then((result) => {
    cy.log("result", result[0]);
    expect(result[0].length).to.eq(3);
  });
});

Given("I want to delete a person table", () => {
  const query = "DROP TABLE People;";
  cy.task("queryDatabase", { dbName, query });
});

Then("I can validate that the table not exist", () => {
  const query = "SHOW FULL TABLES;";
  cy.task("queryDatabase", { dbName, query }).then((result) => {
    cy.log("length", result.length);
    expect(result.length).to.eq(0);
  });
});
