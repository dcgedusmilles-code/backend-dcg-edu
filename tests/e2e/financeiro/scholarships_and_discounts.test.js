const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe("BolsaDesconto E2E", () => {
    it("deve criar e listar bolsas de desconto", async () => {
        const resCreate = await request(app)
            .post("/bolsas-desconto")
            .send({ aluno_id: 1, tipo: "Mérito", percentual: 30 });

        expect(resCreate.statusCode).toBe(201);

        const resList = await request(app).get("/bolsas-desconto");
        expect(resList.statusCode).toBe(200);
        expect(resList.body.length).toBeGreaterThan(0);
    });
});
