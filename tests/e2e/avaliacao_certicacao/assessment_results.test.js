const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

describe("ResultadoAvaliacao API", () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    let resultadoId;

    it("POST /resultados - cria um resultado", async () => {
        const res = await request(app)
            .post('/resultados')
            .send({
                avaliacao_id: 1,
                participante_id: 1,
                nota_reading: 8,
                nota_writer: 7,
                nota_speek: 9,
                nota: 8,
                status: "aprovado",
                observacao: "Muito bom"
            });
        expect(res.statusCode).toBe(201);
        resultadoId = res.body.id;
    });

    it("GET /resultados - lista resultados", async () => {
        const res = await request(app).get('/resultados');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("GET /resultados/:id - busca resultado por ID", async () => {
        const res = await request(app).get(`/resultados/${resultadoId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(resultadoId);
    });

    it("PUT /resultados/:id - atualiza resultado", async () => {
        const res = await request(app)
            .put(`/resultados/${resultadoId}`)
            .send({ status: "recuperação" });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("recuperação");
    });

    it("DELETE /resultados/:id - remove resultado", async () => {
        const res = await request(app).delete(`/resultados/${resultadoId}`);
        expect(res.statusCode).toBe(204);
    });
});
