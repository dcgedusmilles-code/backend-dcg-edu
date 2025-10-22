const service = require('../../services/it_department/it_maintenance_service');

class ManutencaoTIController {
    async criar(req, res) {
        try {
            const manutencao = await service.criarManutencao(req.body);
            res.status(201).json(manutencao);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        const manutencoes = await service.listarManutencoes();
        res.json(manutencoes);
    }

    async obterPorId(req, res) {
        try {
            const manutencao = await service.obterManutencaoPorId(req.params.id);
            res.json(manutencao);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const manutencao = await service.atualizarManutencao(req.params.id, req.body);
            res.json(manutencao);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async remover(req, res) {
        try {
            await service.removerManutencao(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new ManutencaoTIController();
