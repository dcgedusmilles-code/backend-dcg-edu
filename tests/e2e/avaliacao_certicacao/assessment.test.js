// tests/integration/avaliacaoRoutes.e2e.test.js
const request = require('supertest')
const app = require('../../../app');
const { sequelize } = require('../../../models');

jest.setTimeout(30000)

describe('E2E - Avaliacoes API', () => {
  beforeAll(async () => {
    // Sincroniza o DB para testes (in-memory ou test DB configurado)
    await sequelize.sync({ force: true })
  })

  afterAll(async () => {
    // Fecha conexão Sequelize
    await sequelize.close()
  })

  let avaliacaoId

  it('POST /avaliacoes - deve criar uma avaliação', async () => {
    const payload = {
      titulo: 'Prova Final de Matemática',
      descricao: 'Avaliação de final de semestre',
      data: '2025-06-30T09:00:00.000Z'
      // curso_id, turma_id, instrutor_id são opcionais aqui (podem ser adicionados se existirem FK válidas)
    }

    const res = await request(app)
      .post('/avaliacoes')
      .send(payload)
      .set('Accept', 'application/json')

    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.titulo).toBe(payload.titulo)

    avaliacaoId = res.body.id
  })

  it('GET /avaliacoes - deve retornar lista de avaliações', async () => {
    const res = await request(app).get('/avaliacoes')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBeGreaterThanOrEqual(1)
  })

  it('GET /avaliacoes/:id - deve retornar a avaliação criada', async () => {
    const res = await request(app).get(`/avaliacoes/${avaliacaoId}`)
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('id', avaliacaoId)
    expect(res.body).toHaveProperty('titulo')
  })

  it('PUT /avaliacoes/:id - deve atualizar a avaliação', async () => {
    const updatePayload = { descricao: 'Descrição atualizada via teste E2E' }
    const res = await request(app).put(`/avaliacoes/${avaliacaoId}`).send(updatePayload)
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('id', avaliacaoId)
    expect(res.body.descricao).toBe(updatePayload.descricao)
  })

  it('DELETE /avaliacoes/:id - deve apagar a avaliação', async () => {
    const res = await request(app).delete(`/avaliacoes/${avaliacaoId}`)
    // Se a rota foi implementada para devolver 204:
    expect([200, 204]).toContain(res.statusCode)
  })

  it('GET /avaliacoes/:id - depois de apagar deve retornar 404', async () => {
    const res = await request(app).get(`/avaliacoes/${avaliacaoId}`)
    expect([404, 400]).toContain(res.statusCode) // depende de como trataste erros (404 preferível)
  })
})
