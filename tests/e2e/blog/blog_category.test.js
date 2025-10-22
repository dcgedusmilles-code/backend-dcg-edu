const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('BlogCategory - E2E', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true }); // recria as tabelas
    });

    it('deve criar uma categoria de blog', async () => {
        const res = await request(app)
            .post('/api/blog-categories')
            .send({ nome: 'Tecnologia', descricao: 'Posts de Tech' });

        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Tecnologia');
    });

    it('deve listar as categorias de blog', async () => {
        const res = await request(app).get('/api/blog-categories');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('deve atualizar uma categoria', async () => {
        const res = await request(app)
            .put('/api/blog-categories/1')
            .send({ descricao: 'Nova descrição' });

        expect(res.statusCode).toBe(200);
        expect(res.body.descricao).toBe('Nova descrição');
    });

    it('deve deletar uma categoria', async () => {
        const res = await request(app).delete('/api/blog-categories/1');
        expect(res.statusCode).toBe(204);
    });
});
