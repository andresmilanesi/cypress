before(() => {

    cy.fixture('column6.json').as('data')
    cy.fixture('locators.json').as('locator')

    cy.get('@data').then((data) => {
        cy.get('@locator').then((locator) => {

            Cypress.Commands.add('login', () => {
                cy.visit("/login");
                cy.get(locator.pageLogin.userField).type(data.userEmail);
                cy.get(locator.pageLogin.passField).type(data.userPass, {log: false});
                cy.get(locator.pageLogin.loginButton).click();
            })

            Cypress.Commands.add('createAdvertiser', () => {
                cy.get(locator.pageSideBar.advertiserButton).click();
                cy.get(locator.pageSideBar.createAdvertiser).click();
                cy.get(locator.pageAdvertiser.nameField).type(data.releaseVersion);
                cy.get(locator.pageAdvertiser.contactNameField).type(data.randomName);
                cy.get(locator.pageAdvertiser.contactEmailField).type(data.email);
                cy.get(locator.pageAdvertiser.contactPhoneField).type(data.phone);
                cy.get(locator.pageAdvertiser.contactAddressField).type(data.address);
                cy.get(locator.pageAdvertiser.createAndContinueButton).click();
            })

            Cypress.Commands.add('createIO', () => {
                cy.get(locator.globalPopUps.creationSuccess).click();
                cy.get(locator.pageIO.nameField).type(data.releaseVersion);
                cy.get(locator.pageIO.contactNameField).type(data.randomName);
                cy.get(locator.pageIO.contactEmailField).type(data.email);
                cy.get(locator.pageIO.createAndContinueButton).click();
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
})
