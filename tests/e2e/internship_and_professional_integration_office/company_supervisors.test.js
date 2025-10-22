const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Rotas de SupervisorEmpresa (E2E)', () => {
    it('POST /supervisores deve criar supervisor', async () => {
        const res = await request(app)
            .post('/supervisores')
            .send({
                id_empresa: 1,
                nome: 'João Silva',
                cargo: 'Gerente',
                telefone: '999999999',
                email: 'joao@empresa.com'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('João Silva');
    });

    it('GET /supervisores deve listar supervisores', async () => {
        const res = await request(app).get('/supervisores');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
