/**
 * tests/e2e/contrato.e2e.test.js
 *
 * Testes E2E usando supertest.
 *
 * Observações:
 * - Ajuste os requires dos models e app conforme a sua estrutura.
 * - Este teste sincroniza o DB com { force: true } para ambiente de teste.
 * - Cria registros mínimos de Cliente e Funcionario para satisfazer FKs.
 * - Execute com NODE_ENV=test e banco de teste configurado.
 */

const request = require('supertest');
const app = require('../../../app'); // sua instância do express
const { sequelize, models } = require('../../../models');

describe('Contrato - E2E', () => {
    beforeAll(async () => {
        // Sincroniza o banco (limpa) — só em ambiente de teste!
        await sequelize.sync({ force: true });

        // Cria dados mínimos necessários (Cliente, Funcionario)
        // Ajuste os campos conforme os modelos reais no seu projeto.
        await models.Cliente.create({
            nome: 'Cliente Teste',
            tipo: 'Pessoa Física',
            email: 'cliente@test.com',
            telefone: '912345678',
            endereco: 'Rua Teste 1',
            data_cadastro: new Date(),
            status: 'ativo'
        });

        await models.Funcionario.create({
            nome: 'Responsavel Teste',
            email: 'resp@test.com',
            telefone: '923456789',
            cargo: 'Gerente'
        });
    });

    it('POST /contratos - deve criar um contrato', async () => {
        const payload = {
            id_cliente: 1,
            numero_contrato: 'CT-E2E-001',
            descricao: 'Contrato E2E',
            valor_total: 5000,
            data_inicio: new Date().toISOString(),
            data_fim: null,
            status: 'ativo',
            id_responsavel: 1
        };

        const res = await request(app)
            .post('/contratos')
            .send(payload)
            .set('Accept', 'application/json');

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.numero_contrato).toBe('CT-E2E-001');
    });

    it('GET /contratos - deve listar contratos', async () => {
        const res = await request(app).get('/contratos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        // opcional: verificar se a lista contém o contrato criado
        expect(res.body.some(c => c.numero_contrato === 'CT-E2E-001')).toBeTruthy();
    });

    it('GET /contratos/:id - deve obter contrato por id', async () => {
        const resList = await request(app).get('/contratos');
        const contratoId = resList.body[0].id;
        const res = await request(app).get(`/contratos/${contratoId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id', contratoId);
    });

    it('PUT /contratos/:id - deve atualizar contrato', async () => {
        const resList = await request(app).get('/contratos');
        const contratoId = resList.body[0].id;

        const res = await request(app)
            .put(`/contratos/${contratoId}`)
            .send({ descricao: 'Atualizado via E2E', valor_total: 6000 });

        expect(res.statusCode).toBe(200);
        expect(res.body.descricao).toBe('Atualizado via E2E');
        expect(res.body.valor_total).toBe(6000);
    });

    it('DELETE /contratos/:id - deve remover contrato', async () => {
        const resList = await request(app).get('/contratos');
        const contratoId = resList.body[0].id;

        const res = await request(app).delete(`/contratos/${contratoId}`);
        expect(res.statusCode).toBe(204);

        // confirma remoção
        const after = await request(app).get(`/contratos/${contratoId}`);
        expect(after.statusCode).toBe(404);
    });

    afterAll(async () => {
        await sequelize.close();
    });
});
