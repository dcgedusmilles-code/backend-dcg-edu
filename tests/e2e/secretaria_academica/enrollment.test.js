const request = require('supertest');
const app = require('../../../app'); // arquivo principal Express

describe('Matricula E2E', () => {
    it('POST /api/matriculas - deve criar uma matrícula', async () => {
        const res = await request(app)
            .post('/api/matriculas')
            .send({
                aluno_id: 1,
                curso_id: 1,
                turma_id: 2,
                data_matricula: '2025-03-01',
                status: 'Ativa',
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
    });
});
