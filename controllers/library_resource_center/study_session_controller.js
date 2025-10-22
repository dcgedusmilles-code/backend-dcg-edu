const sessaoEstudoService = require('../../services/library_resource_center/study_session_service');

class SessaoEstudoController {
    async listar(req, res) {
        const dados = await sessaoEstudoService.listar();
        res.json(dados);
    }

    async buscarPorId(req, res) {
        const { id } = req.params;
        const sessao = await sessaoEstudoService.buscarPorId(id);
        if (!sessao) return res.status(404).json({ message: 'Sessão não encontrada' });
        res.json(sessao);
    }

    async criar(req, res) {
        try {
            const nova = await sessaoEstudoService.criar(req.body);
            res.status(201).json(nova);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        const { id } = req.params;
        const atualizada = await sessaoEstudoService.atualizar(id, req.body);
        if (!atualizada) return res.status(404).json({ message: 'Sessão não encontrada' });
        res.json(atualizada);
    }

    async remover(req, res) {
        const { id } = req.params;
        const removida = await sessaoEstudoService.remover(id);
        if (!removida) return res.status(404).json({ message: 'Sessão não encontrada' });
        res.status(204).send();
    }
}

module.exports = new SessaoEstudoController();
