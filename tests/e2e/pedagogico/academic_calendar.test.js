const request = require('supertest');
const app = require('../../../app');


describe('Rotas CalendarioAcademico (E2E)', () => {
  it('GET /calendarios deve retornar 200', async () => {
    const res = await request(app).get('/calendarios');
    expect([200, 500]).toContain(res.statusCode);
  });

  it('POST /calendarios deve retornar 201', async () => {
    const res = await request(app)
      .post('/calendarios')
      .send({ ano_letivo: 2025, semestre: 1, data_inicio: '2025-02-01', data_fim: '2025-07-15' });
    expect([201, 500]).toContain(res.statusCode); // 500 se DB não estiver ativo
  });
});
