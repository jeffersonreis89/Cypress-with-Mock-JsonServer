/// <reference types="cypress" />

import * as GETBoletos from '../../support/GETServices/boleto.request';

describe('GET Boletos', () => {
  it('Get em todos Boleto', () => {
    GETBoletos.boletoAll();
  })

  it('Get unico Boleto', () => {
    GETBoletos.singleBoleto();
  })
})
