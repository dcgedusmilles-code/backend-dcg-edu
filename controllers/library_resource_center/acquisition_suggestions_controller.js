const service = require('../../services/library_resource_center/acquisition_suggestions_service');

class SugestaoAquisicaoController {
    async listar(req, res) {
        try {
            const sugestoes = await service.listarSugestoes();
            res.status(200).json(sugestoes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obter(req, res) {
        try {
            const sugestao = await service.obterSugestao(req.params.id);
            res.status(200).json(sugestao);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async criar(req, res) {
        try {
            const nova = await service.criarSugestao(req.body);
            res.status(201).json(nova);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizada = await service.atualizarSugestao(req.params.id, req.body);
            res.status(200).json(atualizada);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async excluir(req, res) {
        try {
            await service.excluirSugestao(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new SugestaoAquisicaoController();
