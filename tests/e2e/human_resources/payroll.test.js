const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('E2E - FolhaPagamento', () => {
    it('deve criar uma folha de pagamento', async () => {
        const data = {
            funcionario_id: 1,
            referencia_mes: '2023-09',
            salario_base: 3000,
            horas_extras: 100,
            descontos: 200,
            beneficios: 150,
            valor_liquido: 3050,
            data_pagamento: new Date()
        };

        const res = await request(app).post('/folhas-pagamento').send(data);
        expect(res.statusCode).toBe(201);
        expect(res.body.referencia_mes).toBe('2023-09');
    });

    it('deve listar folhas de pagamento', async () => {
        const res = await request(app).get('/folhas-pagamento');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
