const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('Aluno E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('deve criar e listar alunos', async () => {
        const novo = { nome: 'Maria Santos', email: 'maria@example.com' };
        const resPost = await request(app).post('/alunos').send(novo);
        expect(resPost.status).toBe(201);

        const resGet = await request(app).get('/alunos');
        expect(resGet.status).toBe(200);
        expect(resGet.body.length).toBeGreaterThan(0);
    });
});
