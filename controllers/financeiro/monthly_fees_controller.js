const mensalidadeService = require('../../services/financeiro/monthly_fees_service');

class MensalidadeController {
    async create(req, res) {
        try {
            const mensalidade = await mensalidadeService.createMensalidade(req.body);
            return res.status(201).json(mensalidade);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const mensalidades = await mensalidadeService.getMensalidades();
            return res.status(200).json(mensalidades);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const mensalidade = await mensalidadeService.getMensalidadeById(req.params.id);
            if (!mensalidade) return res.status(404).json({ message: "Mensalidade não encontrada" });
            return res.status(200).json(mensalidade);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const mensalidade = await mensalidadeService.updateMensalidade(req.params.id, req.body);
            if (!mensalidade) return res.status(404).json({ message: "Mensalidade não encontrada" });
            return res.status(200).json(mensalidade);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await mensalidadeService.deleteMensalidade(req.params.id);
            if (!deleted) return res.status(404).json({ message: "Mensalidade não encontrada" });
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new MensalidadeController();
