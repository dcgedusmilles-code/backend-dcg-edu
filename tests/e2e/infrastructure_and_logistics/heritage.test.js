const request = require('supertest');
const app = require('../../../app');
const { Patrimonio } = require('../../../models');

describe('E2E Patrimonio', () => {
    beforeAll(async () => {
        await Patrimonio.sync({ force: true });
    });

    test('POST /api/patrimonios cria um patrimônio', async () => {
        const res = await request(app)
            .post('/api/patrimonios')
            .send({
                nome_item: 'Mesa de Escritório',
                descricao: 'Mesa de madeira',
                categoria: 'Mobiliário',
                valor_aquisicao: 120000,
                estado: 'Novo',
                localizacao: 1
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome_item).toBe('Mesa de Escritório');
    });

    test('GET /api/patrimonios retorna lista', async () => {
        const res = await request(app).get('/api/patrimonios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
