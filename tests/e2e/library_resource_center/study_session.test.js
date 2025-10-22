const request = require('supertest');
const app = require('../../../app');
const { SessaoEstudo } = require('../../../models');

describe('SessaoEstudo API', () => {
    beforeAll(async () => {
        await SessaoEstudo.sync({ force: true });
    });

    it('deve criar uma sessão de estudo', async () => {
        const res = await request(app)
            .post('/sessoes-estudo')
            .send({ id_usuario: 1, local: 'Sala A', status: 'ativa' });
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('ativa');
    });

    it('deve listar sessões de estudo', async () => {
        const res = await request(app).get('/sessoes-estudo');
        expect(res.statusCode).toBe(200);
    });
});
