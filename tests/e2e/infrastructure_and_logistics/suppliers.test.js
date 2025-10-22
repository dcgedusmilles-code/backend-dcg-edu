const request = require('supertest');
const app = require('../../../app');

describe('Fornecedor E2E', () => {
    it('deve criar e listar fornecedor', async () => {
        const novo = { nome: 'Fornecedor XPTO', tipo: 'Serviços' };
        await request(app).post('/fornecedores').send(novo).expect(201);

        const lista = await request(app).get('/fornecedores').expect(200);
        expect(lista.body.length).toBeGreaterThan(0);
    });
});
