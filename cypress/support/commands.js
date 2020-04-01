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

Cypress.Commands.add('loginToApp', ({username, password}) => {
    cy.visit("/login");
    cy.get('#login-email').type(username);
    cy.get('#login-pass').type(password, {log: false});
    cy.get('.btn').debug().click();
  });

Cypress.Commands.add('createAdvertiser', ({name, contactName, contactEmail, phoneNumber, companyAddress}) => {
    cy.get(".j-advertiser-section").click();
    cy.get(".sidebar-tools > .j-advertiser-add").click();
    cy.get("#form-field-name").type(name);
    cy.get("#form-field-contactName").type(contactName);
    cy.get("#form-field-contactEmail").type(contactEmail);
    cy.get("#form-field-contactPhone").type(phoneNumber);
    cy.get("#form-field-contactAddress").type(companyAddress);
    cy.get("#advertiser-create-and-navigate-btn").click();
})

Cypress.Commands.add('createIO', ({name, priContactName, priContactEmail}) => {
    cy.get(".close").click();
    cy.get("#form-field-name").type(name);
    cy.get("#form-field-primaryContactName").type(priContactName);
    cy.get("#form-field-primaryContactEmail").type(priContactEmail);
    cy.get("#insertionOrder-create-and-navigate-btn").click();
})

Cypress.Commands.add('createCampaign', ({name, cpm}) => {
    cy.get(".close").click();
    cy.get("#form-field-name").type(name);
    cy.get("#form-field-cpm").clear();
    cy.get("#form-field-cpm").type(cpm);
    cy.get("#j-field-container-goal > .ng-isolate-scope > .form-group > :nth-child(4) > .ng-binding").click();
    cy.get("#campaign-create-and-navigate-btn").click();
})

Cypress.Commands.add('createTagMedia', ({name, adTag}) => {
    cy.get(".close").click();
    cy.get("#form-field-name").type(name);
    cy.get(".form-group-adTag > .CodeMirror > .CodeMirror-scroll").type(adTag);
    cy.get("#media-save-btn").click();
})