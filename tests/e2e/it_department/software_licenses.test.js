const request = require('supertest');
const app = require('../../../app'); // app Express principal

describe('LicencaSoftware E2E', () => {
    it('GET /licencas deve retornar 200', async () => {
        const res = await request(app).get('/licencas');
        expect(res.statusCode).toBe(200);
    });

    it('POST /licencas deve criar uma licença', async () => {
        const res = await request(app)
            .post('/licencas')
            .send({
                nome_software: 'Visual Studio',
                chave_licenca: 'XYZ-123',
                quantidade: 5,
                data_inicio: '2025-01-01',
                data_validade: '2026-01-01',
                fornecedor: 'Microsoft',
                status: 'Ativa'
            });
        expect(res.statusCode).toBe(201);
    });
});
