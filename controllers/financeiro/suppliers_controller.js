const fornecedorService = require('../../services/financeiro/suppliers_service');

class FornecedorController {
    async create(req, res) {
        try {
            const fornecedor = await fornecedorService.createFornecedor(req.body);
            return res.status(201).json(fornecedor);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const fornecedores = await fornecedorService.getFornecedores();
            return res.status(200).json(fornecedores);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async findById(req, res) {
        try {
            const fornecedor = await fornecedorService.getFornecedorById(req.params.id);
            if (!fornecedor) return res.status(404).json({ message: "Fornecedor não encontrado" });
            return res.status(200).json(fornecedor);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const fornecedor = await fornecedorService.updateFornecedor(req.params.id, req.body);
            if (!fornecedor) return res.status(404).json({ message: "Fornecedor não encontrado" });
            return res.status(200).json(fornecedor);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const deleted = await fornecedorService.deleteFornecedor(req.params.id);
            if (!deleted) return res.status(404).json({ message: "Fornecedor não encontrado" });
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new FornecedorController();
