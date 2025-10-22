const service = require('../../services/human_resources/selection_process_service');

class ProcessoSeletivoController {
    async criar(req, res) {
        try {
            const novo = await service.criar(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        const lista = await service.listar();
        res.json(lista);
    }

    async buscarPorId(req, res) {
        try {
            const registro = await service.buscarPorId(req.params.id);
            res.json(registro);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await service.atualizar(req.params.id, req.body);
            res.json(atualizado);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async deletar(req, res) {
        try {
            await service.deletar(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new ProcessoSeletivoController();
