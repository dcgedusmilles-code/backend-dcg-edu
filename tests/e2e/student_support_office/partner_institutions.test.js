const request = require('supertest');
const app = require('../../../app'); // app Express configurado

describe('InstituicaoParceira API', () => {
    it('POST /api/instituicoes-parceiras - deve criar uma nova instituição', async () => {
        const res = await request(app)
            .post('/api/instituicoes-parceiras')
            .send({
                nome: 'Microsoft',
                tipo: 'Tecnologia',
                contato: 'Ana Silva',
                email: 'ana@microsoft.com',
                telefone: '999-999-999',
                area_colaboracao: 'Empregabilidade'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Microsoft');
    });
});
