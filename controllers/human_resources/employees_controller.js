const funcionarioService = require('../../services/human_resources/employees_service');

class FuncionarioController {
    async create(req, res) {
        try {
            const funcionario = await funcionarioService.createFuncionario(req.body);
            return res.status(201).json(funcionario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const funcionarios = await funcionarioService.getFuncionarios();
            return res.json(funcionarios);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const funcionario = await funcionarioService.getFuncionarioById(req.params.id);
            if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
            return res.json(funcionario);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const funcionario = await funcionarioService.updateFuncionario(req.params.id, req.body);
            if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
            return res.json(funcionario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const funcionario = await funcionarioService.deleteFuncionario(req.params.id);
            if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
            return res.json({ message: 'Funcionário excluído com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new FuncionarioController();
