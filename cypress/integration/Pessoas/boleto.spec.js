/// <reference types="cypress" />

import * as GETBoletos from '../../support/Services/boleto.request';

describe('Boletos', () => {
  it('Get em todos Boleto', () => {
    GETBoletos.boletoAll();
  })

  it('Get unico Boleto', () => {
    GETBoletos.singleBoleto();
  })

  it('Criar um Boleto', () => {
    GETBoletos.postBoleto();
  })
})
