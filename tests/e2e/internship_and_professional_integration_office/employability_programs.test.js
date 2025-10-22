const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('Rotas de ProgramaEmpregabilidade (E2E)', () => {
    it('POST /programas deve criar um programa', async () => {
        const res = await request(app)
            .post('/programas')
            .send({
                nome: 'Programa Talentos 2025',
                descricao: 'Capacitação para recém-formados',
                tipo: 'Estágio',
                data_inicio: '2025-01-10',
                data_fim: '2025-12-10',
                parceiro: 1
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Programa Talentos 2025');
    });

    it('GET /programas deve listar programas', async () => {
        const res = await request(app).get('/programas');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
