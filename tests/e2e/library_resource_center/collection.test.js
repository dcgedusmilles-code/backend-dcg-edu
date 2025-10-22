const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('E2E - Acervo', () => {
    it('deve criar e listar acervos', async () => {
        const resCreate = await request(app)
            .post('/api/acervos')
            .send({ titulo: 'Livro Teste', autor: 'Autor Teste' })
            .expect(201);

        const resList = await request(app)
            .get('/api/acervos')
            .expect(200);

        expect(resList.body.length).toBeGreaterThan(0);
        expect(resList.body[0].titulo).toBe('Livro Teste');
    });
});
