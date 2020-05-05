/// <reference types="Cypress" />

describe("Testing some hooks", () => {

    before(() => {
        cy.log('*****The SETUP is running block!*****')
      })
    
      after(() => {
        cy.log('*****Performing tear down block!*****')
      })
    
      beforeEach(() => {
        cy.log('*****Performing the login block!*****')
      })
    
      afterEach(() => {
        cy.log('*****Performing the logout block!*****')
      })

    it("Test 1", () => {
        cy.log('*****This is test 1!*****')
    })

    it("Test 2", () => {
        cy.log("*****This is test 2!*****")
    })

    it("Test 3", () => {
        cy.log("*****This is test 3!*****")
    })

})