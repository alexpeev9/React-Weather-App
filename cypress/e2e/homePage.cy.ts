import { textUnitMetrics, textHeader } from "../../src/utils/constants";

// Test suite for the Home Page
describe("Test - Home Page", () => {
  // Visit the home page before each test
  beforeEach(() => {
    cy.visit(`http://localhost:5173`);
  });

  // Test to confirm that the page can open
  it("Confirm page can open.", () => {
    cy.get("h1").should("exist").should("have.text", textHeader.title);
  });

  // Test to confirm that there are 5 days displayed on the page
  it("Confirm 5 days on the page.", () => {
    cy.get("[data-test='weather-item-link']")
      .should("exist")
      .should("have.length", 5);
  });

  // Test to confirm that weather item links work
  it("Confirm links work", () => {
    // Asserts that weather item links exist and click on the first
    cy.get("[data-test='weather-item-link']").should("exist").first().click();

    // Asserts that there is at least 1 weather item data
    cy.get("[data-test='weather-item-data']")
      .should("exist")
      .should("have.length.at.least", 1);
  });
});

// Test suite for changing temperature
describe(`Test - Change Temperature`, () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit(`http://localhost:5173`);
  });

  // Test to confirm changing temperature to metric
  it(`Confirm changed to ${textUnitMetrics.metric}`, () => {
    // Clicks the metric unit input
    cy.get("[data-test='input-metric']").should("exist").click();

    // Asserts that temperature value contains metric unit
    cy.get("[data-test='temperature-value']")
      .first()
      .contains(textUnitMetrics.metric)
      .should("exist");
  });

  // Test to confirm changing temperature to imperial
  it(`Confirm changed to ${textUnitMetrics.imperial}`, () => {
    cy.get("[data-test='input-imperial']").should("exist").click();

    // Asserts that temperature value contains imperial unit
    cy.get("[data-test='temperature-value']")
      .first()
      .contains(textUnitMetrics.imperial)
      .should("exist");
  });
});
