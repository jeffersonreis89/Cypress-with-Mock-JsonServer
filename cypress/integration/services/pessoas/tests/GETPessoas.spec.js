import * as GETPessoas from '../request/GETPessoas.request';

describe('GET Pessoas', () => {
    it('Listar Todas as Pessoas', () => {
        GETPessoas.allPessoas().should((response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        }))
    });
});