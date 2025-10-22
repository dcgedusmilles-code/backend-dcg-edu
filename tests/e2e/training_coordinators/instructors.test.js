const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('Instrutor E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('deve criar e listar instrutores', async () => {
        const novoInstrutor = {
            nome: 'Carlos Alberto',
            email: 'carlos@example.com',
            telefone: '999999999',
            especialidade: 'Backend',
            curriculo: 'Instrutor com experiência em Node.js'
        };

        const resPost = await request(app).post('/api/instrutores').send(novoInstrutor);
        expect(resPost.status).toBe(201);

        const resGet = await request(app).get('/api/instrutores');
        expect(resGet.status).toBe(200);
        expect(resGet.body.length).toBeGreaterThan(0);
    });
});
