const service = require('../../services/it_department/it_assets_service');

class AtivoTIController {
    async criar(req, res) {
        try {
            const ativo = await service.criarAtivo(req.body);
            res.status(201).json(ativo);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        const ativos = await service.listarAtivos();
        res.json(ativos);
    }

    async obterPorId(req, res) {
        try {
            const ativo = await service.obterAtivoPorId(req.params.id);
            res.json(ativo);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const ativo = await service.atualizarAtivo(req.params.id, req.body);
            res.json(ativo);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async remover(req, res) {
        try {
            await service.removerAtivo(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new AtivoTIController();
