const bancaService = require('../../services/avaliacao_certicacao/examining_boards_service');

class BancaExaminadoraController {
    async listar(req, res) {
        const bancas = await bancaService.listar();
        res.json(bancas);
    }

    async buscarPorId(req, res) {
        const banca = await bancaService.buscarPorId(req.params.id);
        if (!banca) return res.status(404).json({ message: 'Banca não encontrada' });
        res.json(banca);
    }

    async criar(req, res) {
        const banca = await bancaService.criar(req.body);
        res.status(201).json(banca);
    }

    async atualizar(req, res) {
        const banca = await bancaService.atualizar(req.params.id, req.body);
        if (!banca) return res.status(404).json({ message: 'Banca não encontrada' });
        res.json(banca);
    }

    async remover(req, res) {
        const deleted = await bancaService.remover(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Banca não encontrada' });
        res.status(204).send();
    }
}

module.exports = new BancaExaminadoraController();
