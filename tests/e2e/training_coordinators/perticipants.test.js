const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('Participante E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('deve criar e listar participantes', async () => {
        const novo = {
            nome: 'Maria Clara',
            email: 'maria@example.com',
            telefone: '923456789',
            cpf: '123.456.789-00',
            endereco: 'Rua das Flores, 45'
        };

        const resPost = await request(app).post('/api/participantes').send(novo);
        expect(resPost.status).toBe(201);

        const resGet = await request(app).get('/api/participantes');
        expect(resGet.status).toBe(200);
        expect(resGet.body.length).toBeGreaterThan(0);
    });
});
