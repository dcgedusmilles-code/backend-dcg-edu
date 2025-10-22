const contratoTrabalhoService = require('../../services/human_resources/employment_contracts_service');

class ContratoTrabalhoController {
    async create(req, res) {
        try {
            const contrato = await contratoTrabalhoService.createContrato(req.body);
            return res.status(201).json(contrato);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const contratos = await contratoTrabalhoService.getContratos();
            return res.json(contratos);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const contrato = await contratoTrabalhoService.getContratoById(req.params.id);
            if (!contrato) return res.status(404).json({ error: 'Contrato não encontrado' });
            return res.json(contrato);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const contrato = await contratoTrabalhoService.updateContrato(req.params.id, req.body);
            if (!contrato) return res.status(404).json({ error: 'Contrato não encontrado' });
            return res.json(contrato);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const contrato = await contratoTrabalhoService.deleteContrato(req.params.id);
            if (!contrato) return res.status(404).json({ error: 'Contrato não encontrado' });
            return res.json({ message: 'Contrato excluído com sucesso' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new ContratoTrabalhoController();
