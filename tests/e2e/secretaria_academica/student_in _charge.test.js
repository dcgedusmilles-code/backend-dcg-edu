const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('AlunoEncarregado E2E', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('deve criar e listar um vínculo aluno-encarregado', async () => {
    const novo = { aluno_id: 1, encarregado_id: 2, tipo_responsabilidade: 'financeiro' };

    const resPost = await request(app).post('/aluno-encarregado').send(novo);
    expect(resPost.status).toBe(201);

    const resGet = await request(app).get('/aluno-encarregado');
    expect(resGet.status).toBe(200);
    expect(resGet.body.length).toBeGreaterThan(0);
  });
});
