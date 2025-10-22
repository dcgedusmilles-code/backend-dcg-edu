const request = require('supertest');
const app = require('../../../app');
const { SegurancaPatrimonial } = require('../../models');

describe('E2E SegurancaPatrimonial', () => {
    beforeAll(async () => {
        await SegurancaPatrimonial.sync({ force: true });
    });

    test('POST /api/seguranca cria um registro', async () => {
        const res = await request(app)
            .post('/api/seguranca')
            .send({
                tipo: 'Incidente',
                descricao: 'Roubo noturno',
                local: 1,
                responsavel: 2,
                status: 'Aberto'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Incidente');
    });

    test('GET /api/seguranca retorna lista', async () => {
        const res = await request(app).get('/api/seguranca');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
