const request = require('supertest');
const app = require('../../../app'); // sua instância do Express

describe('Rotas de Turma (E2E)', () => {
  it('GET /turmas deve retornar 200', async () => {
    const res = await request(app).get('/turmas');
    expect(res.statusCode).toBe(200);
  });

  it('POST /turmas deve criar nova turma', async () => {
    const res = await request(app)
      .post('/turmas')
      .send({ nome: 'Turma Teste', ano: 2025, semestre: 2 });
    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe('Turma Teste');
  });
});
