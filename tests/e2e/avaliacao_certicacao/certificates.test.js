const request = require('supertest');
const app = require('../../../app'); // sua instância do express
const { sequelize } = require('../../../models');

describe('Certificados - E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    it('POST /certificados - deve criar certificado', async () => {
        const response = await request(app)
            .post('/certificados')
            .send({
                participante_id: 1,
                curso_id: 1,
                turma_id: 1,
                data_emissao: new Date(),
                codigo_validacao: 'ZZZ123',
                status: 'emitido',
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.codigo_validacao).toBe('ZZZ123');
    });

    it('GET /certificados - deve listar certificados', async () => {
        const response = await request(app).get('/certificados');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});
