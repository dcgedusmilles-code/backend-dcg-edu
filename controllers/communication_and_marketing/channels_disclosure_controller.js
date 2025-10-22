const canalService = require('../../services/communication_and_marketing/channels_disclosure_service');

class CanalDivulgacaoController {
    async create(req, res) {
        try {
            const canal = await canalService.criarCanal(req.body);
            res.status(201).json(canal);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao criar canal de divulgação', error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const canais = await canalService.listarCanais();
            res.json(canais);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar canais', error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const canal = await canalService.buscarPorId(req.params.id);
            if (!canal) return res.status(404).json({ message: 'Canal não encontrado' });
            res.json(canal);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar canal', error: err.message });
        }
    }

    async update(req, res) {
        try {
            const canal = await canalService.atualizarCanal(req.params.id, req.body);
            if (!canal) return res.status(404).json({ message: 'Canal não encontrado' });
            res.json(canal);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao atualizar canal', error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await canalService.deletarCanal(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Canal não encontrado' });
            res.json({ message: 'Canal removido com sucesso' });
        } catch (err) {
            res.status(500).json({ message: 'Erro ao deletar canal', error: err.message });
        }
    }
}

module.exports = new CanalDivulgacaoController();
