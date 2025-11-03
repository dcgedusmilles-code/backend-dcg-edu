// src/tests/auth.test.js
const request = require("supertest");
const app = require("../../../app");
const { sequelize, User } = require("../../../models");

describe("Auth API", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  let accessToken = null;
  let refreshToken = null;

  test("POST /api/auth/register → deve criar um novo usuário", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Teste",
        email: "teste@example.com",
        password: "123456",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.user.email).toBe("teste@example.com");
  });

  test("POST /api/auth/login → deve autenticar o usuário", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "teste@example.com", password: "123456" });

    expect(res.statusCode).toBe(200);
    accessToken = res.body.tokens.accessToken;
    refreshToken = res.body.tokens.refreshToken;
  });

  test("POST /api/auth/refresh → deve gerar novo access token", async () => {
    const res = await request(app)
      .post("/api/auth/refresh")
      .send({ refreshToken });

    expect(res.statusCode).toBe(200);
    expect(res.body.accessToken).toBeDefined();
  });

  test("POST /api/auth/change-password → deve alterar a senha com token válido", async () => {
    const res = await request(app)
      .post("/api/auth/change-password")
      .set("Authorization", `Bearer ${accessToken}`)
      .send({ oldPassword: "123456", newPassword: "654321" });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain("atualizada");
  });
});
