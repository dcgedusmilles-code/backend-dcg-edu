const clienteService = require('../../services/commercial/clients_service');

class ClienteController {
    /**
     * Lista todos os clientes
     */
    async listar(req, res) {
        try {
            const clientes = await clienteService.listar();
            res.json(clientes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    /**
     * Busca um cliente pelo ID
     */
    async buscarPorId(req, res) {
        try {
            const cliente = await clienteService.buscarPorId(req.params.id);
            if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
            res.json(cliente);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Cria um novo cliente
     */
    async criar(req, res) {
        try {
            const cliente = await clienteService.criar(req.body);
            res.status(201).json(cliente);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Atualiza um cliente existente
     */
    async atualizar(req, res) {
        try {
            const cliente = await clienteService.atualizar(req.params.id, req.body);
            if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
            res.json(cliente);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    /**
     * Remove um cliente
     */
    async remover(req, res) {
        try {
            const deleted = await clienteService.remover(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Cliente não encontrado' });
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new ClienteController();
