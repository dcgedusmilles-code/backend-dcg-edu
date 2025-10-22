const request = require('supertest');
const app = require('../../../app'); // app Express configurado

describe('EventoApoio API', () => {
    it('POST /api/eventos-apoio - deve criar um novo evento', async () => {
        const res = await request(app)
            .post('/api/eventos-apoio')
            .send({
                nome_evento: 'Palestra de Motivação',
                tipo: 'Palestra',
                descricao: 'Evento para estudantes finalistas',
                data_inicio: '2025-11-01',
                data_fim: '2025-11-01',
                publico_alvo: 'Finalistas',
                responsavel: 1
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.nome_evento).toBe('Palestra de Motivação');
    });
});
