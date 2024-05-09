const { beforeEach } = require("node:test")

context("Login", () =>{
    beforeEach("should sign in", () =>{
        cy.visit("/")
    })

    it("Must be possible to login with right data", () =>{
        cy.get('h1').should("be.visible").contains('Sign in')
    })
})