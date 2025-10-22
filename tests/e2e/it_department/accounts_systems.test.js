const request = require('supertest');
const app = require('../../../app'); // Express configurado com rotas

describe('ContaSistema E2E', () => {
    it('deve criar e listar contas', async () => {
        const novaConta = {
            usuario_id: 1,
            sistema: 'ERP',
            username: 'admin',
            senha_hash: 'hash123',
            status: 'ativo',
            data_criacao: new Date()
        };

        const resCriar = await request(app)
            .post('/contas')
            .send(novaConta)
            .expect(201);

        expect(resCriar.body.username).toBe('admin');

        const resListar = await request(app).get('/contas').expect(200);
        expect(Array.isArray(resListar.body)).toBe(true);
    });
});
