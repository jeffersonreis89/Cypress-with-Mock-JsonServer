const cypress = require("cypress");

function allPessoas() {
    return cy.request({
        method: 'GET',
        url: 'pessoas',
        failOnStatusCode: false,
    });
    
}

export {allPessoas};