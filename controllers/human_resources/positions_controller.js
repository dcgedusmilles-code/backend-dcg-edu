const service = require('../../services/human_resources/positions_service');

class CargoController {
    async criar(req, res) {
        try {
            const novo = await service.criarCargo(req.body);
            res.status(201).json(novo);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async listar(req, res) {
        const cargos = await service.listarCargos();
        res.json(cargos);
    }

    async buscarPorId(req, res) {
        try {
            const cargo = await service.buscarPorId(req.params.id);
            res.json(cargo);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async atualizar(req, res) {
        try {
            const atualizado = await service.atualizarCargo(req.params.id, req.body);
            res.json(atualizado);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }

    async deletar(req, res) {
        try {
            await service.deletarCargo(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    }
}

module.exports = new CargoController();
