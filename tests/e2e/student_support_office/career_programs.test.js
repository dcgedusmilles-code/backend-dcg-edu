const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('ProgramaCarreira E2E', () => {
    it('POST /programas-carreira -> cria novo programa', async () => {
        const res = await request(app)
            .post('/programas-carreira')
            .send({
                nome: 'Programa Jovem Profissional',
                tipo: 'Estágio',
                descricao: 'Parceria com empresas locais'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Programa Jovem Profissional');
    });

    it('GET /programas-carreira -> retorna lista', async () => {
        const res = await request(app).get('/programas-carreira');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
