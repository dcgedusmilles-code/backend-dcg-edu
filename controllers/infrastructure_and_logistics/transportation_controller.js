const transporteService = require('../../services/infrastructure_and_logistics/transportation_service');

class TransporteController {
    async listar(req, res) {
        try {
            const dados = await transporteService.listar();
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obterPorId(req, res) {
        try {
            const { id } = req.params;
            const transporte = await transporteService.obterPorId(id);
            res.status(200).json(transporte);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async criar(req, res) {
        try {
            const novo = await transporteService.criar(req.body);
            res.status(201).json(novo);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const atualizado = await transporteService.atualizar(id, req.body);
            res.status(200).json(atualizado);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;
            await transporteService.remover(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new TransporteController();
