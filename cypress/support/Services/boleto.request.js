var url = "http://localhost:3000/";
var idAleatorio = Math.floor(Math.random() * 1000);
var numeroBoleto = Math.random();

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

export let postBoleto = () => {
  cy.request({
    method: 'POST',
    url: `${url}boleto/`,
    body: {
      id: idAleatorio,
      codBoleto: numeroBoleto,
      amount: 300
    }
  }).then(response => {
    expect(response.status).to.eq(201);
    expect(response.body).to.be.not.null;
    expect(response.body).to.have.property("id", idAleatorio);
  })
}