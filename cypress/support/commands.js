// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
it("Commands", () => {

    cy.fixture("column6").as("data");

    cy.get("@data").then((data) => {

        Cypress.Commands.add('login', () => {
            cy.visit("/login");
            cy.get('#login-email').type(data.userEmail);
            cy.get('#login-pass').type(data.userPass, {log: false});
            cy.get('.btn').debug().click();
        })

        Cypress.Commands.add('createAdvertiser', () => {
            cy.get(".j-advertiser-section").click();
            cy.get(".sidebar-tools > .j-advertiser-add").click();
            cy.get("#form-field-name").type(data.releaseVersion);
            cy.get("#form-field-contactName").type(data.randomName);
            cy.get("#form-field-contactEmail").type(data.email);
            cy.get("#form-field-contactPhone").type(data.phone);
            cy.get("#form-field-contactAddress").type(data.address);
            cy.get("#advertiser-create-and-navigate-btn").click();
        })

        Cypress.Commands.add('createIO', () => {
            cy.get(".close").click();
            cy.get("#form-field-name").type(data.releaseVersion);
            cy.get("#form-field-primaryContactName").type(data.randomName);
            cy.get("#form-field-primaryContactEmail").type(data.email);
            cy.get("#insertionOrder-create-and-navigate-btn").click();
        })

        Cypress.Commands.add('createCampaign', () => {
            cy.get(".close").click();
            cy.get("#form-field-name").type(data.releaseVersion);
            cy.get("#form-field-cpm").clear();
            cy.get("#form-field-cpm").type(data.campaignCPM);
            cy.get("#j-field-container-goal > .ng-isolate-scope > .form-group > :nth-child(4) > .ng-binding").click();
            cy.get("#campaign-create-and-navigate-btn").click();
        })

        Cypress.Commands.add('createTagMedia', () => {
            cy.get(".close").click();
            cy.get("#form-field-name").type(data.releaseVersion);
            cy.get(".form-group-adTag > .CodeMirror > .CodeMirror-scroll").type(data.mediaTag);
            cy.get("#media-save-btn").click();
        })

    })

})
