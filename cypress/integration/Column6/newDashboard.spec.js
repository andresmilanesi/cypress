/// <reference types="Cypress" />

describe("New Dashboard testing", () => {

    it("DemandFlow", () => {

        cy.visit("http://localhost:3000")
        cy.get('.MuiContainer-root > :nth-child(1)').should("contain.text", "Route not found or under construction")
    })

})