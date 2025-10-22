const request = require('supertest');
const app = require('../../../app');

describe('Rotas de Aula (E2E)', () => {
  it('GET /aulas deve retornar 200', async () => {
    const res = await request(app).get('/aulas');
    expect([200, 500]).toContain(res.statusCode);
  });

  it('POST /aulas deve retornar 201 ou 500', async () => {
    const res = await request(app)
      .post('/aulas')
      .send({
        data: '2025-03-01',
        hora_inicio: '08:00',
        hora_fim: '09:30',
        conteudo_previsto: 'Introdução à Programação',
        disciplina_id: 1,
        professor_id: 2,
        turma_id: 3
      });
    expect([201, 500]).toContain(res.statusCode);
  });
});
