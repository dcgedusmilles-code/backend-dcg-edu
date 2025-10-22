const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('Professor - E2E', () => {
    let id;

    it('deve criar um professor', async () => {
        const res = await request(app)
            .post('/professores')
            .send({
                nome: 'José Pedro',
                email: 'jose.pedro@universidade.ao',
                telefone: '924567890',
                formacao: 'Mestre em Educação',
                departamento_id: 1
            });
        expect(res.status).toBe(201);
        id = res.body.id;
    });

    it('deve listar professores', async () => {
        const res = await request(app).get('/professores');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('deve obter um professor pelo ID', async () => {
        const res = await request(app).get(`/professores/${id}`);
        expect(res.status).toBe(200);
    });

    it('deve atualizar um professor', async () => {
        const res = await request(app)
            .put(`/professores/${id}`)
            .send({ nome: 'José Pedro Atualizado' });
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('José Pedro Atualizado');
    });

    it('deve deletar um professor', async () => {
        const res = await request(app).delete(`/professores/${id}`);
        expect(res.status).toBe(204);
    });
});
