const request = require('supertest');
const app = require('../../../app'); // sua instância express
const { sequelize, RecursoAvaliacao, } = require('../../../models');

describe("RecursoAvaliacao API", () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    let recursoId;

    it("POST /recursos - deve criar um recurso", async () => {
        const res = await request(app)
            .post('/recursos')
            .send({
                resultado_id: 1,
                participante_id: 1,
                data_solicitacao: new Date(),
                justificativa: "Quero revisão da nota",
                status: "pendente"
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.id).toBeDefined();
        recursoId = res.body.id;
    });

    it("GET /recursos - deve listar recursos", async () => {
        const res = await request(app).get('/recursos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("GET /recursos/:id - deve buscar recurso por ID", async () => {
        const res = await request(app).get(`/recursos/${recursoId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(recursoId);
    });

    it("PUT /recursos/:id - deve atualizar recurso", async () => {
        const res = await request(app)
            .put(`/recursos/${recursoId}`)
            .send({ justificativa: "Nova justificativa" });
        expect(res.statusCode).toBe(200);
        expect(res.body.justificativa).toBe("Nova justificativa");
    });

    it("DELETE /recursos/:id - deve deletar recurso", async () => {
        const res = await request(app).delete(`/recursos/${recursoId}`);
        expect(res.statusCode).toBe(204);
    });

    it("GET /recursos/:id - deve retornar 404 após deletar", async () => {
        const res = await request(app).get(`/recursos/${recursoId}`);
        expect(res.statusCode).toBe(404);
    });
});
