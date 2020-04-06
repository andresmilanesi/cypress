/// <reference types="Cypress" />

describe("Dashboard regression testing", () => {

    it("demandFlow", () => {

        cy.login();
        cy.createAdvertiser();
        cy.createIO();
        cy.createCampaign();
        cy.createTagMedia();

    })

})