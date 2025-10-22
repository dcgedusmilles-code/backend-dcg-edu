const request = require('supertest');
const app = require('../../../app');

describe('Rotas AtivoTI', () => {
    it('deve listar ativos de TI (GET /api/ativos)', async () => {
        const res = await request(app).get('/api/ativos');
        expect(res.statusCode).toBe(200);
    });

    it('deve criar um novo ativo de TI (POST /api/ativos)', async () => {
        const res = await request(app)
            .post('/api/ativos')
            .send({ tipo: 'Servidor', descricao: 'Servidor Dell PowerEdge' });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Servidor');
    });
});
