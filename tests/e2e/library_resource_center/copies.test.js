const request = require('supertest');
const app = require('../../../app'); // Importa o Express configurado

describe('E2E - Exemplar', () => {
    it('deve criar e listar exemplares', async () => {
        const resCreate = await request(app)
            .post('/api/exemplares')
            .send({ id_item: 1, codigo_exemplar: 'EX-001', estado: 'Novo', status: 'Disponível' })
            .expect(201);

        const resList = await request(app)
            .get('/api/exemplares')
            .expect(200);

        expect(resList.body.length).toBeGreaterThan(0);
        expect(resList.body[0].codigo_exemplar).toBe('EX-001');
    });
});
