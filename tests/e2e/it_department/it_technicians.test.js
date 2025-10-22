const request = require('supertest');
const app = require('../../../app');
const { TecnicoTI } = require('../../../models');

describe('E2E - TecnicoTI', () => {
    beforeAll(async () => {
        await TecnicoTI.destroy({ where: {} });
    });

    it('POST /tecnicos → cria um técnico', async () => {
        const res = await request(app)
            .post('/tecnicos')
            .send({ nome: 'Carlos Lopes', email: 'carlos@empresa.com', telefone: '923456789', especialidade: 'Redes', cargo: 'Analista' });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Carlos Lopes');
    });

    it('GET /tecnicos → retorna lista de técnicos', async () => {
        const res = await request(app).get('/tecnicos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
