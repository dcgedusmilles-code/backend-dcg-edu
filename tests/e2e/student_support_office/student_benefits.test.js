const request = require('supertest');
const app = require('../../../app');

describe('BeneficioEstudantil E2E', () => {
    it('deve criar um novo benefício', async () => {
        const res = await request(app)
            .post('/beneficios')
            .send({
                id_estudante: 1,
                tipo: 'Bolsa Transporte',
                descricao: 'Apoio para deslocação diária',
                status: 'Ativo',
                data_inicio: '2025-01-01',
                data_fim: '2025-12-31',
            });
        expect(res.statusCode).toBe(201);
    });
});
