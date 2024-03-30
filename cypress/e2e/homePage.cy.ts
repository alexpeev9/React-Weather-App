import { textUnitMetrics } from "../../src/utils/constants";

describe("Test - Home Page", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5173`);
  });
  it("Confirm page can open.", () => {
    cy.get("[data-test='weather-item-link']")
      .should("have.length", 5)
      .first()
      .click();
  });
  it("Confirm 5 days on the page.", () => {
    cy.get("[data-test='weather-item-link']")
      .should("exist")
      .should("have.length", 5);
  });
  it("Confirm links work", () => {
    cy.get("[data-test='weather-item-link']").should("exist").first().click();

    cy.get("[data-test='weather-item-data']")
      .should("exist")
      .should("have.length.at.least", 1);
  });
});

describe(`Test - Change Temperature`, () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5173`);
  });
  it(`Confirm changed to ${textUnitMetrics.metric}`, () => {
    cy.get("[data-test='input-metric']").should("exist").click();

    cy.get("[data-test='temperature-value']")
      .first()
      .contains(textUnitMetrics.metric)
      .should("exist");
  });
  it(`Confirm changed to ${textUnitMetrics.imperial}`, () => {
    cy.get("[data-test='input-imperial']").should("exist").click();

    cy.get("[data-test='temperature-value']")
      .first()
      .contains(textUnitMetrics.imperial)
      .should("exist");
  });
});
