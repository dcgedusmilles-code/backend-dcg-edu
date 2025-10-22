const request = require('supertest');
const app = require('../../../app'); // seu express principal

describe('LogAcesso E2E', () => {
    it('GET /logs deve retornar 200', async () => {
        const res = await request(app).get('/logs');
        expect(res.statusCode).toBe(200);
    });

    it('POST /logs deve criar um log', async () => {
        const res = await request(app)
            .post('/logs')
            .send({
                usuario_id: 1,
                sistema: 'Sistema X',
                acao: 'Login',
                data_hora: new Date(),
                ip_origem: '192.168.1.1'
            });
        expect(res.statusCode).toBe(201);
    });
});
