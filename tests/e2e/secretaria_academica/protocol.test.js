const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - Protocolo', () => {
    it('deve criar um protocolo', async () => {
        const res = await request(app)
            .post('/api/protocolos')
            .send({ aluno_id: 1, tipo: 'Reclamação', descricao: 'Erro nas notas' });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Reclamação');
    });

    it('deve listar os protocolos', async () => {
        const res = await request(app).get('/api/protocolos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
