const departamentoInternoService = require('../../services/human_resources/internal_departments_service');

class DepartamentoInternoController {
    async create(req, res) {
        try {
            const departamento = await departamentoInternoService.createDepartamento(req.body);
            return res.status(201).json(departamento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const departamentos = await departamentoInternoService.getDepartamentos();
            return res.json(departamentos);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const departamento = await departamentoInternoService.getDepartamentoById(req.params.id);
            if (!departamento) return res.status(404).json({ error: 'Departamento não encontrado' });
            return res.json(departamento);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const departamento = await departamentoInternoService.updateDepartamento(req.params.id, req.body);
            if (!departamento) return res.status(404).json({ error: 'Departamento não encontrado' });
            return res.json(departamento);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const departamento = await departamentoInternoService.deleteDepartamento(req.params.id);
            if (!departamento) return res.status(404).json({ error: 'Departamento não encontrado' });
            return res.json({ message: 'Departamento excluído com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new DepartamentoInternoController();
