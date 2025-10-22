const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe('Curso E2E', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('deve criar e listar cursos', async () => {
    const novoCurso = { titulo: 'React Básico', descricao: 'Front-end moderno', carga_horaria: 40, modalidade: 'online', nivel: 'iniciante' };

    const resPost = await request(app).post('/api/cursos').send(novoCurso);
    expect(resPost.status).toBe(201);

    const resGet = await request(app).get('/api/cursos');
    expect(resGet.status).toBe(200);
    expect(resGet.body.length).toBeGreaterThan(0);
  });
});
