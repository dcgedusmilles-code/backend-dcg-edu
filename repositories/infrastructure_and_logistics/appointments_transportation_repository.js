const { AgendamentoTransporte } = require('../../models');

class AgendamentoTransporteRepository {
    async findAll() {
        return AgendamentoTransporte.findAll({
            include: ['transporte', 'motorista_info'],
        });
    }

    async findById(id) {
        return AgendamentoTransporte.findByPk(id, {
            include: ['transporte', 'motorista_info'],
        });
    }

    async create(data) {
        return AgendamentoTransporte.create(data);
    }

    async update(id, data) {
        const record = await this.findById(id);
        if (!record) return null;
        return record.update(data);
    }

    async delete(id) {
        const record = await this.findById(id);
        if (!record) return null;
        await record.destroy();
        return true;
    }
}

module.exports = new AgendamentoTransporteRepository();
