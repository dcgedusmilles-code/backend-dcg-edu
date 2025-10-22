const request = require('supertest');
const app = require('../../../app'); // Express principal


describe('E2E - DocumentoAcadêmico', () => {
    it('POST /documentos deve criar um novo documento', async () => {
        const res = await request(app)
            .post('/documentos')
            .send({ tipo: 'Certificado', aluno_id: 1, status: 'emitido' });
        expect(res.statusCode).toBe(201);
        expect(res.body.tipo).toBe('Certificado');
    });

    it('GET /documentos deve listar documentos', async () => {
        const res = await request(app).get('/documentos');
        expect(res.statusCode).toBe(200);
    });
});
