/// <reference types="Cypress" />

describe("New Dashboard testing", () => {

    it("DemandFlow", () => {

        cy.visit("http://localhost:3000")
        cy.get(".MuiPaper-root > :nth-child(1) > .MuiListItem-root").should("be.visible")
        cy.get('[aria-label="reporting menu"]').should("be.visible")
        cy.get('[aria-label="supply menu"]').should("be.visible")
        cy.get('[aria-label="demand menu"]').should("be.visible")
        cy.get('[aria-label="admin menu"]').should("be.visible")
        cy.get('[aria-label="user settings menu"]').should("be.visible")
        cy.get('[aria-label="notifications"]').should("be.visible")
        cy.get('[aria-label="help menu"]').should("be.visible")
        cy.get('[aria-label="logout"]').should("be.visible")
        // Click this
        cy.get('[aria-label="supply menu"]').click()
        cy.get('.MuiList-root > [href="/publishers"]').click()

    })

})