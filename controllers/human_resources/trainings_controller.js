const treinamentoService = require('../../services/human_resources/trainings_service');

class TreinamentoController {
    async listar(req, res) {
        const treinamentos = await treinamentoService.listarTodos();
        return res.json(treinamentos);
    }

    async buscar(req, res) {
        try {
            const treinamento = await treinamentoService.buscarPorId(req.params.id);
            return res.json(treinamento);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        const novoTreinamento = await treinamentoService.criar(req.body);
        return res.status(201).json(novoTreinamento);
    }

    async atualizar(req, res) {
        try {
            const atualizado = await treinamentoService.atualizar(req.params.id, req.body);
            return res.json(atualizado);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await treinamentoService.deletar(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new TreinamentoController();
