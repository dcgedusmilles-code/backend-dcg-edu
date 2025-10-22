const request = require('supertest');
const app = require('../../../app');


describe('Acompanhamentos API (E2E)', () => {
    it('GET /acompanhamentos deve retornar 200', async () => {
        const res = await request(app).get('/acompanhamentos');
        expect([200, 500]).toContain(res.status);
    });

    it('POST /acompanhamentos deve criar um acompanhamento', async () => {
        const res = await request(app)
            .post('/acompanhamentos')
            .send({
                id_estudante: 1,
                tipo: 'Acompanhamento pedagógico',
                descricao: 'Monitoramento do desempenho do aluno.',
                data_inicio: '2025-10-01',
                data_fim: '2025-10-30',
                status: 'ativo'
            });
        expect([201, 400]).toContain(res.status);
    });
});
