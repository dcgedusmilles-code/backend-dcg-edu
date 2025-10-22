const { Cliente } = require('../../models');

class ClienteRepository {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        return await this.model.findAll({ include: ['propostas', 'contratos', 'vendas'] });
    }

    async findById(id) {
        return await this.model.findByPk(id, { include: ['propostas', 'contratos', 'vendas'] });
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        const cliente = await this.model.findByPk(id);
        if (!cliente) return null;
        return await cliente.update(data);
    }

    async delete(id) {
        return await this.model.destroy({ where: { id } });
    }
}

module.exports = new ClienteRepository(Cliente);
