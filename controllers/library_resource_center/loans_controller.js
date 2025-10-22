const emprestimoService = require('../../services/library_resource_center/loans_service');

class EmprestimoController {
    async listar(req, res) {
        try {
            const emprestimos = await emprestimoService.listar();
            res.json(emprestimos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const emprestimo = await emprestimoService.buscarPorId(req.params.id);
            res.json(emprestimo);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const novoEmprestimo = await emprestimoService.criar(req.body);
            res.status(201).json(novoEmprestimo);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const emprestimo = await emprestimoService.atualizar(req.params.id, req.body);
            res.json(emprestimo);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await emprestimoService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new EmprestimoController();
