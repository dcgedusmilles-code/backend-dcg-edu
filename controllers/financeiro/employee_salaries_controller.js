const salarioFuncionarioService = require('../../services/financeiro/employee_salaries_service');

class SalarioFuncionarioController {
    async create(req, res) {
        try {
            const salario = await salarioFuncionarioService.create(req.body);
            res.status(201).json(salario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const salarios = await salarioFuncionarioService.findAll();
            res.json(salarios);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const salario = await salarioFuncionarioService.findById(req.params.id);
            if (!salario) return res.status(404).json({ message: "Não encontrado" });
            res.json(salario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const salario = await salarioFuncionarioService.update(req.params.id, req.body);
            if (!salario) return res.status(404).json({ message: "Não encontrado" });
            res.json(salario);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await salarioFuncionarioService.delete(req.params.id);
            if (!deleted) return res.status(404).json({ message: "Não encontrado" });
            res.json({ message: "Excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new SalarioFuncionarioController();
