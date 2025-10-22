const request = require('supertest');
const app = require('../../../app'); // arquivo principal do Express

describe('EventoBiblioteca - Rotas (E2E)', () => {
    it('Deve criar um novo evento', async () => {
        const response = await request(app)
            .post('/eventos-biblioteca')
            .send({
                titulo: 'Semana da Leitura',
                tipo: 'Cultural',
                data_inicio: new Date(),
                descricao: 'Evento de incentivo à leitura',
                publico_alvo: 'Estudantes'
            });

        expect(response.statusCode).toBe(201);
    });

    it('Deve listar todos os eventos', async () => {
        const response = await request(app).get('/eventos-biblioteca');
        expect(response.statusCode).toBe(200);
    });
});
