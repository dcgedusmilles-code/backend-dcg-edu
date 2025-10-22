const agendamentoService = require('../../services/student_support_office/appointments_service');

class AgendamentoController {
    async create(req, res) {
        try {
            const agendamento = await agendamentoService.create(req.body);
            res.status(201).json(agendamento);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        const agendamentos = await agendamentoService.getAll();
        res.json(agendamentos);
    }

    async getById(req, res) {
        try {
            const agendamento = await agendamentoService.getById(req.params.id);
            res.json(agendamento);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const agendamento = await agendamentoService.update(req.params.id, req.body);
            res.json(agendamento);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await agendamentoService.delete(req.params.id);
            res.json({ message: 'Agendamento removido com sucesso' });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new AgendamentoController();
