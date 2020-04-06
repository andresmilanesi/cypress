/// <reference types="Cypress" />

describe("Dashboard regression testing", () => {

    it("DemandFlow", () => {

        cy.login();
        cy.createAdvertiser();
        cy.createIO();
        cy.createCampaign();
        cy.createTagMedia();

    })

})