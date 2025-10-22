const contratoService = require('../../services/commercial/contracts_service');

class ContratoController {
    /**
     * Lista todos os contratos
     */
    async listar(req, res) {
        try {
            const contratos = await contratoService.listar(req.query);
            res.json(contratos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca um contrato pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const contrato = await contratoService.buscarPorId(req.params.id);
            if (!contrato) return res.status(404).json({ message: 'Contrato não encontrado' });
            res.json(contrato);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria um novo contrato
     */
    async criar(req, res) {
        try {
            const contrato = await contratoService.criar(req.body);
            res.status(201).json(contrato);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza um contrato existente
     */
    async atualizar(req, res) {
        try {
            const contrato = await contratoService.atualizar(req.params.id, req.body);
            if (!contrato) return res.status(404).json({ message: 'Contrato não encontrado' });
            res.json(contrato);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove um contrato
     */
    async remover(req, res) {
        try {
            const deleted = await contratoService.remover(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Contrato não encontrado' });
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new ContratoController();
