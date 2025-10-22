const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const LeadController = require('../../../controllers/commercial/leads_controller');
const LeadService = require('../../../services/commercial/leads_service');
const LeadRepository = require('../../../repositories/commercial/leads_repository');

// Mock do banco em memória
const leads = [];
const LeadModelMock = {
    create: jest.fn(async (data) => {
        const novo = { id: leads.length + 1, ...data };
        leads.push(novo);
        return novo;
    }),
    findAll: jest.fn(async () => leads),
    findByPk: jest.fn(async (id) => leads.find((l) => l.id === Number(id))),
    update: jest.fn(async (data, { where: { id } }) => {
        const idx = leads.findIndex((l) => l.id === id);
        if (idx === -1) return [0];
        leads[idx] = { ...leads[idx], ...data };
        return [1];
    }),
    destroy: jest.fn(async ({ where: { id } }) => {
        const idx = leads.findIndex((l) => l.id === id);
        if (idx === -1) return 0;
        leads.splice(idx, 1);
        return 1;
    })
};

// Monta dependências
const repository = new LeadRepository({ Lead: LeadModelMock });
const service = new LeadService({ leadRepository: repository });
const controller = new LeadController({ leadService: service });

// App Express
const app = express();
app.use(bodyParser.json());
const leadRoutes = require('../../routes/leadRoutes')(controller);
app.use('/leads', leadRoutes);

describe('Lead E2E', () => {
    it('POST /leads deve criar lead', async () => {
        const res = await request(app).post('/leads').send({
            nome: 'Carlos',
            email: 'carlos@email.com'
        });

        expect(res.statusCode).toBe(201);
        expect(res.body.nome).toBe('Carlos');
    });

    it('GET /leads deve listar leads', async () => {
        const res = await request(app).get('/leads');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('GET /leads/:id deve obter lead', async () => {
        const res = await request(app).get('/leads/1');
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toBe(1);
    });

    it('PUT /leads/:id deve atualizar lead', async () => {
        const res = await request(app).put('/leads/1').send({ nome: 'Carlos Silva' });
        expect(res.statusCode).toBe(200);
        expect(res.body.nome).toBe('Carlos Silva');
    });

    it('DELETE /leads/:id deve excluir lead', async () => {
        const res = await request(app).delete('/leads/1');
        expect(res.statusCode).toBe(204);
    });
});
