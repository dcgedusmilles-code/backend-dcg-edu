const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - FuncionarioBeneficio', () => {
    it('POST /funcionarios-beneficios - deve criar vínculo', async () => {
        const res = await request(app)
            .post('/funcionarios-beneficios')
            .send({
                funcionario_id: 1,
                beneficio_id: 2,
                data_inicio: '2025-10-01',
                data_fim: '2025-12-31'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.funcionario_id).toBe(1);
    });

    it('GET /funcionarios-beneficios - deve listar vínculos', async () => {
        const res = await request(app).get('/funcionarios-beneficios');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
