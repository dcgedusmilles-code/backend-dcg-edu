const request = require('supertest');
const app = require('../../../app'); // supondo que o express está configurado aqui

describe('E2E Treinamentos', () => {
    it('POST /treinamentos deve criar um novo treinamento', async () => {
        const res = await request(app)
            .post('/treinamentos')
            .send({
                titulo: 'Treinamento Node.js',
                descricao: 'Aprendizado avançado',
                carga_horaria: 20,
                data_inicio: '2025-10-01',
                data_fim: '2025-10-10',
                responsavel: 'João Silva'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.titulo).toBe('Treinamento Node.js');
    });

    it('GET /treinamentos deve retornar lista', async () => {
        const res = await request(app).get('/treinamentos');
        expect(res.statusCode).toBe(200);
    });
});
