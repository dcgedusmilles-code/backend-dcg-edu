const request = require('supertest');
const app = require('../../../app'); // Instância principal do Express

describe('InscricaoDisciplina E2E', () => {
    it('POST /api/inscricoes - deve criar uma inscrição', async () => {
        const res = await request(app)
            .post('/api/inscricoes')
            .send({
                matricula_id: 1,
                disciplina_id: 3,
                semestre: '1º',
                ano: 2025,
                status: 'Ativa'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
    });
});
