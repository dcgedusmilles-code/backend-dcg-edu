const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - AdvertenciaDisciplina', () => {
    it('POST /advertencias - deve criar advertência', async () => {
        const res = await request(app)
            .post('/advertencias')
            .send({
                funcionario_id: 1,
                tipo: 'Leve',
                motivo: 'Atraso',
                data: '2025-10-01',
                responsavel: 'Coordenador'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Leve');
    });

    it('GET /advertencias - deve listar advertências', async () => {
        const res = await request(app).get('/advertencias');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
