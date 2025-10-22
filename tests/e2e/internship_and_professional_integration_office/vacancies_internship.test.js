const request = require('supertest');
const app = require('../../../app'); // importa o Express configurado

describe('VagaEstagio E2E', () => {
    it('deve criar e listar vagas', async () => {
        const novaVaga = {
            titulo_vaga: 'Estágio Front-end',
            descricao: 'React + Node',
            id_empresa: 1
        };

        const resCriar = await request(app)
            .post('/vagas')
            .send(novaVaga)
            .expect(201);

        expect(resCriar.body.titulo_vaga).toBe('Estágio Front-end');

        const resListar = await request(app).get('/vagas').expect(200);
        expect(Array.isArray(resListar.body)).toBe(true);
    });
});
