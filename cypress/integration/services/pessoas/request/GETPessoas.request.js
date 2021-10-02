/// <reference types="cypress" />
const cypress = require("cypress");

function allPessoas() {
    return cy.request({
        method: 'GET',
        url: 'http://localhost:3000/',
        failOnStatusCode: false,
    });
    
}

export {allPessoas};