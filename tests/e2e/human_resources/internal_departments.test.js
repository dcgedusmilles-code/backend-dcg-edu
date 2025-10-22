const request = require('supertest');
const app = require('../../../app'); // sua instância do Express

describe('DepartamentoInterno E2E', () => {
    it('POST /departamentos -> deve criar um departamento', async () => {
        const res = await request(app)
            .post('/departamentos')
            .send({ nome: 'Recursos Humanos', descricao: 'Gestão de pessoas' });

        expect(res.statusCode).toEqual(201);
        expect(res.body.nome).toBe('Recursos Humanos');
    });

    it('GET /departamentos -> deve listar departamentos', async () => {
        const res = await request(app).get('/departamentos');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
