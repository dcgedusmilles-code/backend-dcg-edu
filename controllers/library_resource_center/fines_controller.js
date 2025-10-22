const multaService = require('../../services/library_resource_center/fines_service');

class MultaController {
    async listar(req, res) {
        try {
            const multas = await multaService.listar();
            res.json(multas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscarPorId(req, res) {
        try {
            const multa = await multaService.buscarPorId(req.params.id);
            res.json(multa);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        try {
            const novaMulta = await multaService.criar(req.body);
            res.status(201).json(novaMulta);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const multa = await multaService.atualizar(req.params.id, req.body);
            res.json(multa);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await multaService.deletar(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new MultaController();
