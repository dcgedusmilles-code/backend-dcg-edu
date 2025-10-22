const request = require('supertest');
const app = require('../../../app'); // seu arquivo principal express

describe('Multa - Rotas (E2E)', () => {
    it('Deve criar uma nova multa', async () => {
        const response = await request(app)
            .post('/multas')
            .send({
                id_emprestimo: 1,
                id_usuario: 1,
                valor: 50,
                motivo: 'Atraso',
                status: 'pendente'
            });

        expect(response.statusCode).toBe(201);
    });

    it('Deve listar todas as multas', async () => {
        const response = await request(app).get('/multas');
        expect(response.statusCode).toBe(200);
    });
});
