const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - Candidatos', () => {
    it('POST /candidatos - deve criar candidato', async () => {
        const res = await request(app)
            .post('/candidatos')
            .send({
                nome: 'Maria Souza', email: 'maria@email.com',
                telefone: '999999999', documento: '123456', curriculo: 'curriculo.pdf'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Maria Souza');
    });

    it('GET /candidatos - deve listar candidatos', async () => {
        const res = await request(app).get('/candidatos');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
