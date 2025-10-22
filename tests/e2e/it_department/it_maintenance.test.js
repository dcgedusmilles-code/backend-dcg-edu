const request = require('supertest');
const app = require('../../../app');

describe('Rotas ManutencaoTI', () => {
    it('deve listar manutenções (GET /api/manutencoes)', async () => {
        const res = await request(app).get('/api/manutencoes');
        expect(res.statusCode).toBe(200);
    });

    it('deve criar uma nova manutenção (POST /api/manutencoes)', async () => {
        const res = await request(app)
            .post('/api/manutencoes')
            .send({ ativo_id: 1, tipo: 'Corretiva', descricao: 'Troca de HD' });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Corretiva');
    });
});
