const fornecedorService = require('../../services/infrastructure_and_logistics/suppliers_service');

class FornecedorController {
    async listar(req, res) {
        try {
            const dados = await fornecedorService.listar();
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obterPorId(req, res) {
        try {
            const { id } = req.params;
            const fornecedor = await fornecedorService.obterPorId(id);
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async criar(req, res) {
        try {
            const fornecedor = await fornecedorService.criar(req.body);
            res.status(201).json(fornecedor);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const fornecedor = await fornecedorService.atualizar(id, req.body);
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async remover(req, res) {
        try {
            const { id } = req.params;
            await fornecedorService.remover(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new FornecedorController();
