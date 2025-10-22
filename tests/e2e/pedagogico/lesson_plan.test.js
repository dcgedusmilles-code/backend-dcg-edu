const request = require('supertest');
const app = require('../../../app'); // Express principal

describe('Plano de Aula - E2E', () => {
  let id;

  it('deve criar um plano de aula', async () => {
    const res = await request(app)
      .post('/planos-de-aula')
      .send({
        titulo: 'Plano de Matemática',
        objetivos: 'Ensinar trigonometria',
        conteudo: 'Seno, cosseno e tangente',
        metodologia: 'Aulas práticas e teóricas',
        avaliacao: 'Prova + Trabalho',
        disciplina_id: 1,
        professor_id: 1,
        turma_id: 1
      });
    expect(res.status).toBe(201);
    id = res.body.id;
  });

  it('deve listar planos de aula', async () => {
    const res = await request(app).get('/planos-de-aula');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve obter um plano de aula pelo ID', async () => {
    const res = await request(app).get(`/planos-de-aula/${id}`);
    expect(res.status).toBe(200);
  });

  it('deve atualizar um plano de aula', async () => {
    const res = await request(app)
      .put(`/planos-de-aula/${id}`)
      .send({ titulo: 'Plano Atualizado' });
    expect(res.status).toBe(200);
    expect(res.body.titulo).toBe('Plano Atualizado');
  });

  it('deve deletar um plano de aula', async () => {
    const res = await request(app).delete(`/planos-de-aula/${id}`);
    expect(res.status).toBe(204);
  });
});
