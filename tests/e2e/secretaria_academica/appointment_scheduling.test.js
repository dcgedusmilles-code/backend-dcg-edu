const request = require('supertest');
const app = require('../../../app'); // sua instância principal do express

describe('AgendamentoAtendimento E2E', () => {
    it('POST /api/agendamentos - deve criar um agendamento', async () => {
        const res = await request(app)
            .post('/api/agendamentos')
            .send({
                aluno_id: 1,
                funcionario_id: 2,
                data: '2025-10-10',
                hora: '09:00',
                motivo: 'Atendimento de matrícula',
                status: 'Pendente'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
    });
});
