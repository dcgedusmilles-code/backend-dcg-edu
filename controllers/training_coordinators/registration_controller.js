const inscricaoService = require('../../services/training_coordinators/registration_service');

class InscricaoController {
    async getAll(req, res) {
        const data = await inscricaoService.listar();
        res.json(data);
    }

    async getById(req, res) {
        try {
            const data = await inscricaoService.buscarPorId(req.params.id);
            res.json(data);
        } catch (e) {
            res.status(404).json({ message: e.message });
        }
    }

    async create(req, res) {
        try {
            const data = await inscricaoService.criar(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }

    async update(req, res) {
        try {
            const data = await inscricaoService.atualizar(req.params.id, req.body);
            res.json(data);
        } catch (e) {
            res.status(404).json({ message: e.message });
        }
    }

    async delete(req, res) {
        try {
            await inscricaoService.excluir(req.params.id);
            res.status(204).send();
        } catch (e) {
            res.status(404).json({ message: e.message });
        }
    }
}

module.exports = new InscricaoController();
