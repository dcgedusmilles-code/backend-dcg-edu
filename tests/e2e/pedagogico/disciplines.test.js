const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('Disciplina - E2E', () => {
    let id;

    it('deve criar uma disciplina', async () => {
        const res = await request(app)
            .post('/disciplinas')
            .send({ nome: 'História', descricao: 'Disciplina de História', carga_horaria: 60, curso_id: 1 });
        expect(res.status).toBe(201);
        id = res.body.id;
    });

    it('deve listar disciplinas', async () => {
        const res = await request(app).get('/disciplinas');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('deve obter disciplina pelo id', async () => {
        const res = await request(app).get(`/disciplinas/${id}`);
        expect(res.status).toBe(200);
    });

    it('deve atualizar disciplina', async () => {
        const res = await request(app)
            .put(`/disciplinas/${id}`)
            .send({ nome: 'História Atualizada' });
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('História Atualizada');
    });

    it('deve deletar disciplina', async () => {
        const res = await request(app).delete(`/disciplinas/${id}`);
        expect(res.status).toBe(204);
    });
});
