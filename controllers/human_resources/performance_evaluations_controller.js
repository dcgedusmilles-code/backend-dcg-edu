const service = require('../../services/human_resources/performance_evaluations_service');

class AvaliacaoDesempenhoController {
    async criar(req, res) {
        try {
            const nova = await service.criarAvaliacao(req.body);
            res.status(201).json(nova);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        const dados = await service.listarAvaliacoes();
        res.json(dados);
    }

    async buscarPorId(req, res) {
        try {
            const avaliacao = await service.buscarPorId(req.params.id);
            res.json(avaliacao);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizada = await service.atualizarAvaliacao(req.params.id, req.body);
            res.json(atualizada);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async deletar(req, res) {
        try {
            await service.deletarAvaliacao(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new AvaliacaoDesempenhoController();
