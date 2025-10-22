const request = require('supertest');
const app = require('../../../app'); // sua instância do Express

describe('E2E - Canais de Divulgação', () => {
    it('deve criar e listar canais', async () => {
        const novoCanal = { nome: 'Google Ads', tipo: 'Online', descricao: 'Canal pago de divulgação' };

        await request(app).post('/api/canais').send(novoCanal).expect(201);

        const res = await request(app).get('/api/canais').expect(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
