import { textHeader } from "../../src/utils/constants";

// Get current date
const currentDateRaw = new Date();

// Test suite for the Details Page
describe("Test - Details Page", () => {
  // Get current date in desired format
  const currentDate = currentDateRaw.toISOString().split("T")[0];

  // Visit the details page for the current date
  beforeEach(() => {
    cy.visit(`http://localhost:5173/day/${currentDate}`);
  });

  // Confirm that the page can open and has the specified title
  it("Confirm page can open.", () => {
    cy.get("h1").should("exist").should("have.text", textHeader.title);
  });

  // Confirm the presence of the date text on the page
  it("Confirm text on page.", () => {
    cy.get("[data-test='weather-date']")
      .should("exist")
      .should("have.text", currentDate);
  });

  // Confirm the presence of at least one hour's weather data
  it("Confirm at least one hour.", () => {
    cy.get("[data-test='weather-item-data']")
      .should("exist")
      .should("have.length.at.least", 1);
  });
});

// Test suite for the Details Page for tomorrow
describe("Test - Details Page for next day", () => {
  // Get tomorrow's date and open details page
  beforeEach(() => {
    const tomorrowDate = new Date(
      currentDateRaw.getTime() + 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0];

    // Visit the details page for tomorrow's date
    cy.visit(`http://localhost:5173/day/${tomorrowDate}`);
  });

  // Confirm that the page can open
  it("Confirm page can open.", () => {
    cy.get("h1").should("exist").should("have.text", textHeader.title);
  });

  // Confirm the presence of at least one hour's data for tomorrow
  it("Confirm at least one hour for next day.", () => {
    cy.get("[data-test='weather-item-data']")
      .should("exist")
      .should("have.length.at.least", 1);
  });
});
