var url = "http://localhost:3000/";


export let peopleAll = () => {
  cy.request({
    method: 'GET',
    url: `${url}pessoas/`,
  }).then((response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.not.null;
  }))
};

export let singlePeople = () =>{
  cy.request({
    method: 'GET',
    url: `${url}pessoas/1`,
  }).then((response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.not.null;
    expect(response.body).to.have.property("nome", "Jeff")
  }))
}