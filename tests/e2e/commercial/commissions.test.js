const request = require('supertest');
const app = require('../../../app'); // sua app express
const { sequelize, models } = require('../../../models');

describe('Comissao - E2E', () => {
    beforeAll(async () => {
        // Sincroniza DB de teste — cuidado em ambientes reais
        await sequelize.sync({ force: true });

        // Cria entradas necessárias para FK (Venda e Funcionario)
        // Ajuste os campos conforme seu modelo Venda/Funcionario
        await models.Funcionario.create({ /* campos mínimos */ nome: 'Func 1', email: 'f1@example.com' });
        await models.Venda.create({ /* campos mínimos */ total: 5000, /* ... */ });
    });

    it('POST /comissoes - cria uma comissao', async () => {
        const res = await request(app)
            .post('/comissoes')
            .send({
                id_venda: 1,
                id_funcionario: 1,
                percentual: 5,
                valor: 250,
                status: 'pendente'
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.percentual).toBe(5);
    });

    it('GET /comissoes - lista comissoes', async () => {
        const res = await request(app).get('/comissoes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
