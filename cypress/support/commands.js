before(() => {

    cy.fixture('column6.json').as('data')
    cy.fixture('locators.json').as('locator')

    cy.get('@data').then((data) => {
        cy.get('@locator').then((locator) => {

            Cypress.Commands.add('login', () => {
                cy.visit("/login");
                cy.get(locator.pageLoginuserField).type(data.userEmail);
                cy.get(locator.pageLoginpassField).type(data.userPass, {log: false});
                cy.get(locator.pageLoginloginButton).debug().click();
            })

            Cypress.Commands.add('createAdvertiser', () => {
                cy.get(locator.pageSideBarAdvertiserButton).click();
                cy.get(locator.pageSideBarCreateAdvertiser).click();
                cy.get(locator.pageAdvertiserNameField).type(data.releaseVersion);
                cy.get(locator.pageAdvertiserContactNameField).type(data.randomName);
                cy.get(locator.pageAdvertiserContactEmailField).type(data.email);
                cy.get(locator.pageAdvertiserContactPhoneField).type(data.phone);
                cy.get(locator.pageAdvertiserContactAddressField).type(data.address);
                cy.get(locator.pageAdvertiserCreateAndContinueButton).click();
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
})
