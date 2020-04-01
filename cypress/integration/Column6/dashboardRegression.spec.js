/// <reference types="Cypress" />

describe("Dashboard regression testing", () => {

    before("Passing data values", () => {
        cy.fixture("column6").as("data");
    })

    it("DemandFlow", () => {

        cy.visit("https://www.amazon.com/s?k=alexa&page=2&language=es&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&qid=1584635770&ref=sr_pg_2");

        cy.get("@data").then((data) => {
            cy.loginToApp({username: data.userEmail, password: data.userPass});
            cy.url().should("include", "/manage/dashboard");
            cy.createAdvertiser({name: data.releaseVersion, contactName: data.releaseVersion, contactEmail: data.email, 
                phoneNumber: data.phone, companyAddress: data.address});
            cy.url().should("include", "/dashboard/insertionOrderForm");
            cy.createIO({name: data.releaseVersion, priContactName: data.releaseVersion, priContactEmail: data.email});
            cy.url().should("include", "/dashboard/campaignForm");
            cy.createCampaign({name: data.releaseVersion, cpm: data.campaignCPM});
            cy.url().should("contain", "/dashboard/mediaForm");
            cy.createTagMedia({name: data.releaseVersion, adTag: data.mediaTag});
        })

        

    })

})