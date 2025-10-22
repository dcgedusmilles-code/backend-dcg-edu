const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - FuncionarioSecretaria', () => {
    it('deve criar um vínculo', async () => {
        const res = await request(app)
            .post('/api/funcionarios-secretaria')
            .send({ secretaria_id: 1, funcionario_id: 2 });
        expect(res.statusCode).toBe(201);
        expect(res.body.secretaria_id).toBe(1);
    });

    it('deve listar vínculos', async () => {
        const res = await request(app).get('/api/funcionarios-secretaria');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
