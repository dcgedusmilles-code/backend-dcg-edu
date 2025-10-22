const request = require('supertest');
const app = require('../../../app'); // seu arquivo principal do Express

describe('E2E AgendamentoTransporte', () => {
    it('POST /agendamentos-transporte deve criar um registro', async () => {
        const res = await request(app)
            .post('/agendamentos-transporte')
            .send({
                id_transporte: 1,
                finalidade: 'Entrega de materiais',
                motorista: 2,
                origem: 'Luanda',
                destino: 'Benguela',
                data_saida: '2025-11-01',
                data_retorno: '2025-11-02',
                status: 'Pendente'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('Pendente');
    });

    it('GET /agendamentos-transporte deve retornar lista', async () => {
        const res = await request(app).get('/agendamentos-transporte');
        expect(res.statusCode).toBe(200);
    });
});
