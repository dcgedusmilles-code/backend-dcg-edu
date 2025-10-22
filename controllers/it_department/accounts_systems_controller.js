const contaSistemaService = require('../../services/it_department/accounts_systems_service');

class ContaSistemaController {
    async criar(req, res) {
        try {
            const conta = await contaSistemaService.criarConta(req.body);
            res.status(201).json(conta);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async listar(req, res) {
        try {
            const contas = await contaSistemaService.listarContas();
            res.json(contas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async obterPorId(req, res) {
        try {
            const conta = await contaSistemaService.obterContaPorId(req.params.id);
            res.json(conta);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const conta = await contaSistemaService.atualizarConta(req.params.id, req.body);
            res.json(conta);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await contaSistemaService.excluirConta(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new ContaSistemaController();
