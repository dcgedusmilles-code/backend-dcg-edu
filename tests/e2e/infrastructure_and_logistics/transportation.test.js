const request = require('supertest');
const app = require('../../../app');

describe('Transporte E2E', () => {
    it('deve criar e listar transporte', async () => {
        const novo = {
            tipo: 'Camião',
            placa: 'LDA-1234',
            modelo: 'Volvo FH',
            capacidade: 10000,
            ano_fabricacao: 2019,
            status: 'ativo'
        };

        await request(app).post('/transportes').send(novo).expect(201);
        const lista = await request(app).get('/transportes').expect(200);
        expect(lista.body.length).toBeGreaterThan(0);
    });
});
