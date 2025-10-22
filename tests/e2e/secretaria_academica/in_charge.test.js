const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - Encarregado', () => {
    it('deve criar um encarregado', async () => {
        const res = await request(app)
            .post('/api/encarregados')
            .send({ nome: 'José António', telefone: '923456789' });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('José António');
    });

    it('deve listar encarregados', async () => {
        const res = await request(app).get('/api/encarregados');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
