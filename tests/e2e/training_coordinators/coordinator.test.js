const request = require('supertest');
const app = require('../../../app'); // instância do Express

describe('Rotas de Coordenador (E2E)', () => {
  it('GET /coordenadores deve retornar 200', async () => {
    const res = await request(app).get('/coordenadores');
    expect(res.statusCode).toBe(200);
  });

  it('POST /coordenadores deve criar novo coordenador', async () => {
    const res = await request(app)
      .post('/coordenadores')
      .send({ nome: 'Carlos Silva', email: 'carlos@teste.com' });
    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe('Carlos Silva');
  });
});
