const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('Cliente E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /clientes -> deve criar um cliente', async () => {
        const res = await request(app)
            .post('/clientes')
            .send({ nome: 'Maria', tipo: 'Pessoa Física', email: 'maria@example.com' });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Maria');
    });

    it('GET /clientes -> deve listar clientes', async () => {
        const res = await request(app).get('/clientes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
