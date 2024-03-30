import { textHeader } from "../../src/utils/constants";

const currentDateRaw = new Date();

describe("Test - Details Page", () => {
  const currentDate = currentDateRaw.toISOString().split("T")[0];

  beforeEach(() => {
    cy.visit(`http://localhost:5173/day/${currentDate}`);
  });
  it("Confirm page can open.", () => {
    cy.get("h1").should("exist").should("have.text", textHeader.title);
  });
  it("Confirm text on page.", () => {
    cy.get("[data-test='weather-date']")
      .should("exist")
      .should("have.text", currentDate);
  });
  it("Confirm at least one hour.", () => {
    cy.get("[data-test='weather-item-data']")
      .should("exist")
      .should("have.length.at.least", 1);
  });
});

describe("Test - Details Page for next day", () => {
  beforeEach(() => {
    const tomorrowDate = new Date(
      currentDateRaw.getTime() + 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0];

    cy.visit(`http://localhost:5173/day/${tomorrowDate}`);
  });
  it("Confirm page can open.", () => {
    cy.get("h1").should("exist").should("have.text", textHeader.title);
  });
  it("Confirm at least one hour for next day.", () => {
    cy.get("[data-test='weather-item-data']")
      .should("exist")
      .should("have.length.at.least", 1);
  });
});
