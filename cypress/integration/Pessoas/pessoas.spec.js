/// <reference types="cypress" />

import * as GETPessoas from '../../support/GETServices/pessoas.request';

describe('GET Pessoas', () => {
  it('Get em todas as pessoas', () => {
    GETPessoas.peopleAll();
  })

  it('Get unica pessoa', () => {
    GETPessoas.singlePeople();
  })
})
