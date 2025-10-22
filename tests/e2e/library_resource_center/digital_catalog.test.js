const request = require('supertest');
const app = require('../../../app'); // Express configurado

describe('E2E - CatalogoDigital', () => {
  it('deve criar e listar catálogos digitais', async () => {
    const resCreate = await request(app)
      .post('/api/catalogos-digitais')
      .send({
        titulo: 'Aprendizado de Máquina',
        autor: 'Pedro Lima',
        tipo: 'Ebook',
        url_acesso: 'https://ebooks.com/ia',
        licenca: 'Livre',
        status: 'Disponível'
      })
      .expect(201);

    const resList = await request(app).get('/api/catalogos-digitais').expect(200);
    expect(resList.body.length).toBeGreaterThan(0);
    expect(resList.body[0].titulo).toBe('Aprendizado de Máquina');
  });
});
