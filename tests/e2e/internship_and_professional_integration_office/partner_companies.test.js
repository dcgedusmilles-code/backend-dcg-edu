const request = require('supertest');
const app = require('../../../app');

describe('E2E - EmpresaParceira', () => {
    it('POST /api/empresas deve criar uma empresa', async () => {
        const res = await request(app)
            .post('/api/empresas')
            .send({
                nome: 'GlobalTech',
                setor: 'TI',
                telefone: '999999999',
                email: 'contato@globaltech.com'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('GlobalTech');
    });

    it('GET /api/empresas deve listar empresas', async () => {
        const res = await request(app).get('/api/empresas');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
