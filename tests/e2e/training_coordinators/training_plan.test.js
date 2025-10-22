const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('PlanoDeAula E2E', () => {
    it('GET /planos-de-aula deve retornar 200', async () => {
        const res = await request(app).get('/planos-de-aula');
        expect(res.statusCode).toBe(200);
    });

    it('POST /planos-de-aula deve criar um plano', async () => {
        const res = await request(app)
            .post('/planos-de-aula')
            .send({
                titulo: 'Plano de Aula 1',
                objetivos: 'Ensinar lógica de programação',
                conteudo: 'Estruturas condicionais',
                metodologia: 'Aulas práticas e teóricas',
                avaliacao: 'Teste e projeto',
                disciplina_id: 1,
                professor_id: 1,
                turma_id: 1,
            });
        expect(res.statusCode).toBe(201);
    });
});
