/// <reference types="cypress" />

describe('example to-do app', () => {
  it('displays two todo items by default', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/pessoas/',
    }).should((response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
    }))

  })
})
