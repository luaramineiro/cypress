import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.nasa.gov/";

Given("I open NASA page", () => {
  cy.visit(url);
});

Then("I see NASA logo", () => {
  cy.get(".navbar-header > .logo > img[alt='Nasa']").should("be.visible");
});
