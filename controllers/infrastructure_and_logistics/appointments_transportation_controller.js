const service = require('../../services/infrastructure_and_logistics/appointments_transportation_service');

class AgendamentoTransporteController {
    async listar(req, res) {
        const lista = await service.listarTodos();
        res.json(lista);
    }

    async buscar(req, res) {
        try {
            const item = await service.buscarPorId(req.params.id);
            res.json(item);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        const novo = await service.criar(req.body);
        res.status(201).json(novo);
    }

    async atualizar(req, res) {
        try {
            const atualizado = await service.atualizar(req.params.id, req.body);
            res.json(atualizado);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await service.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new AgendamentoTransporteController();
