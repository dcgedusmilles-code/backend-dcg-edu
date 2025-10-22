const { Fornecedor } = require('../../models');

class FornecedorRepository {
    async findAll() {
        return await Fornecedor.findAll();
    }

    async findById(id) {
        return await Fornecedor.findByPk(id);
    }

    async create(data) {
        return await Fornecedor.create(data);
    }

    async update(id, data) {
        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) return null;
        await fornecedor.update(data);
        return fornecedor;
    }

    async delete(id) {
        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) return null;
        await fornecedor.destroy();
        return fornecedor;
    }
}

module.exports = new FornecedorRepository();
