const funcionarioSecretariaService = require('../../services/secretaria_academica/secretariat_staff_service');

class FuncionarioSecretariaController {
    async create(req, res) {
        try {
            const result = await funcionarioSecretariaService.create(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const result = await funcionarioSecretariaService.findAll();
            return res.json(result);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const result = await funcionarioSecretariaService.findById(req.params.id);
            return res.json(result);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const result = await funcionarioSecretariaService.update(req.params.id, req.body);
            return res.json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await funcionarioSecretariaService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new FuncionarioSecretariaController();
