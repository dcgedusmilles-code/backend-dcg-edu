const service = require('../../services/student_support_office/student_scholarships_service');

class BolsaEstudantilController {
    async listar(req, res) {
        const data = await service.listar();
        res.json(data);
    }

    async buscarPorId(req, res) {
        try {
            const bolsa = await service.buscarPorId(req.params.id);
            res.json(bolsa);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async criar(req, res) {
        try {
            const novo = await service.criar(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await service.atualizar(req.params.id, req.body);
            res.json(atualizado);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }

    async remover(req, res) {
        try {
            await service.remover(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new BolsaEstudantilController();
