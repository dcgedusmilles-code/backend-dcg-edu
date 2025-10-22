const request = require('supertest');
const app = require('../../../app'); // app principal do Express

describe('Emprestimos - E2E', () => {
    it('Deve criar um novo empréstimo', async () => {
        const response = await request(app)
            .post('/emprestimos')
            .send({
                id_exemplar: 1,
                id_usuario: 1,
                data_emprestimo: new Date(),
                data_prevista_devolucao: new Date(),
                status: 'ativo'
            });

        expect(response.statusCode).toBe(201);
    });

    it('Deve listar todos os empréstimos', async () => {
        const response = await request(app).get('/emprestimos');
        expect(response.statusCode).toBe(200);
    });
});
