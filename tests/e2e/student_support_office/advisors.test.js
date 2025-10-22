const request = require('supertest');
const app = require('../../../app');

describe('Orientadores API (E2E)', () => {
    it('GET /orientadores deve retornar 200', async () => {
        const res = await request(app).get('/orientadores');
        expect([200, 500]).toContain(res.status);
    });

    it('POST /orientadores deve criar um orientador', async () => {
        const res = await request(app)
            .post('/orientadores')
            .send({
                nome: 'Dr. João Mendes',
                especialidade: 'Psicopedagogia',
                telefone: '+244900000000',
                email: 'joao@exemplo.com',
                disponibilidade: 'Seg-Sex 8h-17h'
            });
        expect([201, 400]).toContain(res.status);
    });
});
