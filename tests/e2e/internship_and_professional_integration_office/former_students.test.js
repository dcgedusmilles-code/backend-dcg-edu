const request = require('supertest');
const app = require('../../../app'); // import do app Express

describe('Rotas de ExAluno', () => {
    it('GET /exalunos deve retornar 200', async () => {
        const res = await request(app).get('/exalunos');
        expect(res.statusCode).toBe(200);
    });

    it('POST /exalunos deve criar um novo ex-aluno', async () => {
        const res = await request(app)
            .post('/exalunos')
            .send({
                id_estudante: 1,
                empresa_atual: 'Inovatech',
                cargo_atual: 'Engenheiro de Software',
                status_emprego: 'Ativo',
                data_inicio: new Date()
            });
        expect(res.statusCode).toBe(201);
    });
});
