const request = require('supertest');
const app = require('../../../app'); // sua instância do Express

describe('E2E - Conteúdos', () => {
    it('deve criar e listar conteúdos', async () => {
        const novoConteudo = {
            titulo: 'Campanha Black Friday',
            tipo: 'Post',
            descricao: 'Divulgação especial',
            status: 'Ativo'
        };

        await request(app).post('/api/conteudos').send(novoConteudo).expect(201);

        const res = await request(app).get('/api/conteudos').expect(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

