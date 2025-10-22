const bolsaDescontoService = require('../../services/financeiro/scholarships_and_discounts_service');

class BolsaDescontoController {
    async create(req, res) {
        try {
            const bolsa = await bolsaDescontoService.createBolsa(req.body);
            return res.status(201).json(bolsa);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const bolsas = await bolsaDescontoService.getBolsas();
            return res.status(200).json(bolsas);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const bolsa = await bolsaDescontoService.getBolsaById(req.params.id);
            if (!bolsa) return res.status(404).json({ message: "Bolsa não encontrada" });
            return res.status(200).json(bolsa);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const bolsa = await bolsaDescontoService.updateBolsa(req.params.id, req.body);
            if (!bolsa) return res.status(404).json({ message: "Bolsa não encontrada" });
            return res.status(200).json(bolsa);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await bolsaDescontoService.deleteBolsa(req.params.id);
            if (!deleted) return res.status(404).json({ message: "Bolsa não encontrada" });
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new BolsaDescontoController();
