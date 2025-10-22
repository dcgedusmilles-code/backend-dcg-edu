const { Fornecedor, ContaPagar } = require('../../models');

class FornecedorRepository {
    async create(data) {
        return await Fornecedor.create(data);
    }

    async findAll() {
        return await Fornecedor.findAll({ include: [{ model: ContaPagar, as: 'contas' }] });
    }

    async findById(id) {
        return await Fornecedor.findByPk(id, { include: [{ model: ContaPagar, as: 'contas' }] });
    }

    async update(id, data) {
        const fornecedor = await Fornecedor.findByPk(id);
        if (!fornecedor) return null;
        return await fornecedor.update(data);
    }

    async delete(id) {
        return await Fornecedor.destroy({ where: { id } });
    }
}

module.exports = new FornecedorRepository();
