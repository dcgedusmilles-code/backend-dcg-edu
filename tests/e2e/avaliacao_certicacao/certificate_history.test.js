const request = require('supertest');
const app = require('../../../app'); // sua instância do express
const { sequelize } = require('../../../models');

describe('HistoricoCertificado - E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /historicos - deve criar um histórico', async () => {
        const response = await request(app)
            .post('/historicos')
            .send({
                certificado_id: 1,
                acao: 'Criado',
                data: new Date(),
                responsavel: 'Teste',
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.acao).toBe('Criado');
    });

    it('GET /historicos - deve listar históricos', async () => {
        const response = await request(app).get('/historicos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
