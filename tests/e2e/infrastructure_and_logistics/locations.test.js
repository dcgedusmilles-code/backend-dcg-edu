const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - Local', () => {
    it('POST /api/locais → cria um novo local', async () => {
        const res = await request(app).post('/api/locais').send({
            nome_local: 'Depósito Central',
            descricao: 'Área principal de armazenamento',
            capacidade: 500,
            tipo: 'Armazém'
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome_local).toBe('Depósito Central');
    });

    it('GET /api/locais → lista os locais', async () => {
        const res = await request(app).get('/api/locais');
        expect(res.statusCode).toBe(200);
    });
});
