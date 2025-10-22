const request = require('supertest');
const app = require('../../../app'); // app principal Express configurado

describe('E2E - Estagio', () => {
    it('POST /api/estagios deve criar um estágio', async () => {
        const res = await request(app)
            .post('/api/estagios')
            .send({
                id_estudante: 1,
                id_empresa: 1,
                tipo: 'Curricular',
                area_atuacao: 'TI',
                status: 'Ativo'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Curricular');
    });

    it('GET /api/estagios deve retornar lista', async () => {
        const res = await request(app).get('/api/estagios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
