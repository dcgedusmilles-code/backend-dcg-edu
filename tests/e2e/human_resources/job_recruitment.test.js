const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('E2E - RecrutamentoVaga', () => {
    it('deve criar uma vaga', async () => {
        const vaga = { titulo: 'Analista', descricao: 'Teste vaga', requisitos: 'Node.js', salario_proposto: 3000, status: 'aberta' };

        const res = await request(app).post('/recrutamento-vagas').send(vaga);
        expect(res.statusCode).toBe(201);
        expect(res.body.titulo).toBe('Analista');
    });

    it('deve listar vagas', async () => {
        const res = await request(app).get('/recrutamento-vagas');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
