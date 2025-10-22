const service = require('../../services/human_resources/job_recruitment_service');

class RecrutamentoVagaController {
    async create(req, res) {
        try {
            const vaga = await service.create(req.body);
            return res.status(201).json(vaga);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const vagas = await service.getAll();
            return res.json(vagas);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const vaga = await service.getById(req.params.id);
            if (!vaga) return res.status(404).json({ message: 'Vaga não encontrada' });
            return res.json(vaga);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const vaga = await service.update(req.params.id, req.body);
            if (!vaga) return res.status(404).json({ message: 'Vaga não encontrada' });
            return res.json(vaga);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const vaga = await service.delete(req.params.id);
            if (!vaga) return res.status(404).json({ message: 'Vaga não encontrada' });
            return res.json({ message: 'Vaga removida com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new RecrutamentoVagaController();
