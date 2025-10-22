const request = require('supertest');
const app = require('../../../app'); // seu arquivo principal express

describe('SalarioFuncionario E2E', () => {
    it('deve criar um salário e calcular valor líquido', async () => {
        const res = await request(app)
            .post('/salarios')
            .send({
                funcionario_id: 1,
                salario_base: 3000,
                beneficios: 500,
                descontos: 200,
                data_pagamento: "2025-10-01"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.valor_liquido).toBe(3300);
    });

    it('deve listar salários', async () => {
        const res = await request(app).get('/salarios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
