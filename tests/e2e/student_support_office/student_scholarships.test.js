const request = require('supertest');
const app = require('../../../app');

describe('BolsaEstudantil E2E', () => {
    it('deve criar uma nova bolsa', async () => {
        const res = await request(app)
            .post('/bolsas')
            .send({
                nome_bolsa: 'Bolsa Mérito Acadêmico',
                tipo: 'Acadêmica',
                criterios: 'Notas acima de 16 valores',
                valor: 25000,
                periodo: '2025-2026',
            });
        expect(res.statusCode).toBe(201);
    });
});
