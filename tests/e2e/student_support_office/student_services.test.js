const request = require('supertest');
const app = require('../../../app');

describe('AtendimentoEstudante E2E', () => {
    it('deve criar um novo atendimento', async () => {
        const res = await request(app)
            .post('/atendimentos')
            .send({
                id_estudante: 1,
                tipo: 'Orientação Pedagógica',
                descricao: 'Atendimento para orientação de carreira',
                data_atendimento: '2025-10-06T10:00:00Z',
                responsavel: 2,
                status: 'Concluído',
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Orientação Pedagógica');
    });
});
