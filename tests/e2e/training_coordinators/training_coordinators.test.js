const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('CoordenadorTreinamento E2E', () => {
    it('GET /coordenadores-treinamento deve retornar 200', async () => {
        const res = await request(app).get('/coordenadores-treinamento');
        expect(res.statusCode).toBe(200);
    });

    it('POST /coordenadores-treinamento deve criar um novo registro', async () => {
        const res = await request(app)
            .post('/coordenadores-treinamento')
            .send({
                nome: 'Carlos Alberto',
                email: 'carlos@empresa.com',
                telefone: '999999999',
                departamento_id: 1
            });
        expect(res.statusCode).toBe(201);
    });
});
