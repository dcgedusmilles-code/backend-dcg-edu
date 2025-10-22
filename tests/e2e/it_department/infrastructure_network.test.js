const request = require('supertest');
const app = require('../../../app');

describe('Rotas RedeInfraestrutura', () => {
    it('deve listar redes (GET /api/redes)', async () => {
        const res = await request(app).get('/api/redes');
        expect(res.statusCode).toBe(200);
    });

    it('deve criar uma nova rede (POST /api/redes)', async () => {
        const res = await request(app)
            .post('/api/redes')
            .send({ nome: 'Rede Nova', tipo: 'WAN' });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Rede Nova');
    });
});
