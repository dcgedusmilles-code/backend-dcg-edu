const request = require('supertest');
const app = require('../../../app');
const { UsuarioTI } = require('../../../models');

describe('E2E - UsuarioTI', () => {
    beforeAll(async () => {
        await UsuarioTI.destroy({ where: {} });
    });

    it('POST /usuarios → cria um usuário', async () => {
        const res = await request(app)
            .post('/usuarios')
            .send({
                nome: 'Carlos TI',
                email: 'carlos@empresa.com',
                telefone: '923456789',
                cargo: 'Administrador',
                tipo_usuario: 'Interno'
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Carlos TI');
    });

    it('GET /usuarios → retorna lista de usuários', async () => {
        const res = await request(app).get('/usuarios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
