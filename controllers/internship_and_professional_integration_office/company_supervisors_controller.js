const service = require('../../services/internship_and_professional_integration_office/company_supervisors_service');

class SupervisorEmpresaController {
    async listar(req, res) {
        const data = await service.listar();
        res.json(data);
    }

    async obter(req, res) {
        try {
            const data = await service.obterPorId(req.params.id);
            res.json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async criar(req, res) {
        const data = await service.criar(req.body);
        res.status(201).json(data);
    }

    async atualizar(req, res) {
        try {
            const data = await service.atualizar(req.params.id, req.body);
            res.json(data);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    async remover(req, res) {
        try {
            await service.remover(req.params.id);
            res.json({ message: 'Supervisor removido com sucesso' });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}

module.exports = new SupervisorEmpresaController();
