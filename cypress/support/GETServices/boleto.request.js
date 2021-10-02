var url = "http://localhost:3000/";


export let boletoAll = () => {
  cy.request({
    method: 'GET',
    url: `${url}boleto/`,
  }).then((response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.not.null;
  }))
};

export let singleBoleto = () =>{
  cy.request({
    method: 'GET',
    url: `${url}boleto/1`,
  }).then((response => {
    expect(response.status).to.eq(200);
    expect(response.body).to.be.not.null;
    expect(response.body).to.have.property("codBoleto", "328372794984798375973979847349")
  }))
}