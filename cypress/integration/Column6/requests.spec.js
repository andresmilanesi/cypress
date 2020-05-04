/// <reference types="Cypress" />

describe("Requests", () => {

    it("Get request", () => {

        cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })

    })

    it("Delete request", () => {

        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).to.eq(204)
        })

    })

    it("Post request", () => {

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
              name: 'morpheus',
              job: 'leader'
            }
          }).then((response) => {
            expect(response.status).to.eq(201)
          })

    })

})