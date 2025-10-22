const request = require('supertest');
const app = require('../../../app'); // sua instância do Express

describe('E2E - Campanhas', () => {
    it('deve criar e listar campanhas', async () => {
        const novaCampanha = { titulo: 'Natal 2025', tipo_campanha: 'Online', orcamento_estimado: 10000 };

        await request(app).post('/api/campanhas').send(novaCampanha).expect(201);

        const res = await request(app).get('/api/campanhas').expect(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
