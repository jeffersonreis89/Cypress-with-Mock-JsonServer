/// <reference types="cypress" />

import * as GETPessoas from '../../support/Services/pessoas.request';

describe('Pessoas', () => {
  it('Get em todas as pessoas', () => {
    GETPessoas.peopleAll();
  })

  it('Get unica pessoa', () => {
    GETPessoas.singlePeople();
  })
})
