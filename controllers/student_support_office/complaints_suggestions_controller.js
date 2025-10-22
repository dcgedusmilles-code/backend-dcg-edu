const reclamacaoSugestaoService = require('../../services/student_support_office/complaints_suggestions_service');

class ReclamacaoSugestaoController {
    async listar(req, res) {
        const lista = await reclamacaoSugestaoService.listar();
        return res.json(lista);
    }

    async obter(req, res) {
        try {
            const reclamacao = await reclamacaoSugestaoService.obterPorId(req.params.id);
            return res.json(reclamacao);
        } catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    }

    async criar(req, res) {
        try {
            const nova = await reclamacaoSugestaoService.criar(req.body);
            return res.status(201).json(nova);
        } catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizada = await reclamacaoSugestaoService.atualizar(req.params.id, req.body);
            return res.json(atualizada);
        } catch (e) {
            return res.status(400).json({ erro: e.message });
        }
    }

    async excluir(req, res) {
        try {
            await reclamacaoSugestaoService.excluir(req.params.id);
            return res.status(204).send();
        } catch (e) {
            return res.status(404).json({ erro: e.message });
        }
    }
}

module.exports = new ReclamacaoSugestaoController();
