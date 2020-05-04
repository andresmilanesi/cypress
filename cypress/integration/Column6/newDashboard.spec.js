/// <reference types="Cypress" />

describe("New Dashboard testing", () => {

    it("Local Testing", () => {

        cy.visit("http://localhost:3000")
        cy.get('[aria-label="reporting menu"]').should("exist")
        cy.get('.MuiContainer-root > :nth-child(1)').should("contain.text", "Route not found or under construction Oops!")
        
    })

})