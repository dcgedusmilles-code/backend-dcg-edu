const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe('E2E - Manutencao', () => {
    it('POST /api/manutencoes → cria uma nova manutenção', async () => {
        const res = await request(app).post('/api/manutencoes').send({
            id_patrimonio: 1,
            tipo: 'Corretiva',
            descricao_servico: 'Reparo de equipamento',
            fornecedor: 1,
            custo_estimado: 30000,
            custo_real: 32000,
            data_agendada: '2025-10-15',
            data_execucao: '2025-10-18',
            status: 'Concluída'
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Corretiva');
    });

    it('GET /api/manutencoes → lista todas as manutenções', async () => {
        const res = await request(app).get('/api/manutencoes');
        expect(res.statusCode).toBe(200);
    });
});
