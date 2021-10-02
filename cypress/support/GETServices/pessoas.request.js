export let peopleAll = () => {
  cy.request({
    method: 'GET',
    url: 'http://localhost:3000/pessoas/',
  }).then((response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.not.null;
  }))
};

export let singlePeople = () =>{
  cy.request({
    method: 'GET',
    url: 'http://localhost:3000/pessoas/1',
  }).then((response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.not.null;
    expect(response.body).to.have.property("nome", "Jeff")
  }))
}