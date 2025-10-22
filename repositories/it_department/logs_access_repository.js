const { LogAcesso } = require('../../models');

class LogAcessoRepository {
    async findAll() {
        return await LogAcesso.findAll({ include: ['usuario'] });
    }

    async findById(id) {
        return await LogAcesso.findByPk(id, { include: ['usuario'] });
    }

    async create(data) {
        return await LogAcesso.create(data);
    }

    async update(id, data) {
        const log = await LogAcesso.findByPk(id);
        if (!log) return null;
        return await log.update(data);
    }

    async delete(id) {
        const log = await LogAcesso.findByPk(id);
        if (!log) return null;
        await log.destroy();
        return true;
    }
}

module.exports = new LogAcessoRepository();
