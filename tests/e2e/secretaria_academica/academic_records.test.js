const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('E2E - HistoricoAcademico', () => {
    it('POST /historicos deve criar um novo histórico', async () => {
        const res = await request(app)
            .post('/historicos')
            .send({ aluno_id: 1, disciplina_id: 2, nota_final: 15, resultado: 'Aprovado' });
        expect(res.statusCode).toBe(201);
        expect(res.body.resultado).toBe('Aprovado');
    });

    it('GET /historicos deve listar históricos', async () => {
        const res = await request(app).get('/historicos');
        expect(res.statusCode).toBe(200);
    });
});
