const request = require('supertest');
const app = require('../../../app');
const { sequelize } = require('../../../models');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

describe("Mensalidade E2E", () => {
    it("deve criar e listar mensalidades", async () => {
        const resCreate = await request(app)
            .post("/mensalidades")
            .send({ aluno_id: 1, curso_id: 1, valor: 600 });

        expect(resCreate.statusCode).toBe(201);

        const resList = await request(app).get("/mensalidades");
        expect(resList.statusCode).toBe(200);
        expect(resList.body.length).toBeGreaterThan(0);
    });
});
