
import * as GETPessoas from '../request/GETPessoas.request'

describe('GET Pessoas', () => {
    it('Listar Todas as Pessoas', () => {
        GETPessoas.allPessoas().should((response => {
            cy.log(response.status);
            cy.log(response.statusText);
        }))
    });
})