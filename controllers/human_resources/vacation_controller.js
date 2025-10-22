const feriasService = require('../../services/human_resources/vacation_service');

class FeriasController {
    async listar(req, res) {
        const ferias = await feriasService.listarTodas();
        return res.json(ferias);
    }

    async buscar(req, res) {
        try {
            const ferias = await feriasService.buscarPorId(req.params.id);
            return res.json(ferias);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async criar(req, res) {
        const novaFerias = await feriasService.criar(req.body);
        return res.status(201).json(novaFerias);
    }

    async atualizar(req, res) {
        try {
            const atualizado = await feriasService.atualizar(req.params.id, req.body);
            return res.json(atualizado);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await feriasService.deletar(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new FeriasController();
