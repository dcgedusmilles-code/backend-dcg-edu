const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - ObraInfraestrutura', () => {
    it('POST /api/obras → cria uma nova obra', async () => {
        const res = await request(app).post('/api/obras').send({
            nome_obra: 'Construção de Escola',
            descricao: 'Nova escola primária no bairro central',
            local: 1,
            fornecedor: 2,
            custo_estimado: 50000,
            data_inicio: '2025-01-01',
            status: 'planejada',
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome_obra).toBe('Construção de Escola');
    });

    it('GET /api/obras → lista as obras', async () => {
        const res = await request(app).get('/api/obras');
        expect(res.statusCode).toBe(200);
    });
});
