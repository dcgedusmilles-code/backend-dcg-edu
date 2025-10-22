const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('E2E - Blog API', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  let blogId;

  it('POST /blogs - cria post', async () => {
    const res = await request(app)
      .post('/blogs')
      .send({
        titulo: 'Post de Teste',
        conteudo: 'Conteúdo de teste do blog',
        slug: 'post-de-teste'
      });
    expect(res.status).toBe(201);
    blogId = res.body.id;
  });

  it('GET /blogs - lista posts', async () => {
    const res = await request(app).get('/blogs');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('PUT /blogs/:id - atualiza post', async () => {
    const res = await request(app).put(`/blogs/${blogId}`).send({ titulo: 'Atualizado' });
    expect(res.status).toBe(200);
    expect(res.body.titulo).toBe('Atualizado');
  });

  it('DELETE /blogs/:id - remove post', async () => {
    const res = await request(app).delete(`/blogs/${blogId}`);
    expect(res.status).toBe(204);
  });
});
