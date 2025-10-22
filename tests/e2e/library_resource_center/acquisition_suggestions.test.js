const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('SugestaoAquisicao E2E', () => {
    it('GET /sugestoes deve retornar 200', async () => {
        const res = await request(app).get('/sugestoes');
        expect(res.statusCode).toBe(200);
    });

    it('POST /sugestoes deve criar uma sugestão', async () => {
        const res = await request(app)
            .post('/sugestoes')
            .send({
                id_usuario: 1,
                titulo_sugerido: 'Código Limpo',
                autor: 'Robert C. Martin',
                tipo: 'Livro',
                justificativa: 'Material essencial para estudos de boas práticas',
                data_sugestao: '2025-01-15',
                status: 'Pendente'
            });
        expect(res.statusCode).toBe(201);
    });
});
