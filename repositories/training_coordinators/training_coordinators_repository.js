const { CoordenadorTreinamento } = require('../../models');

class CoordenadorTreinamentoRepository {
    async findAll() {
        return await CoordenadorTreinamento.findAll({ include: ['departamento', 'cursos'] });
    }

    async findById(id) {
        return await CoordenadorTreinamento.findByPk(id, { include: ['departamento', 'cursos'] });
    }

    async create(data) {
        return await CoordenadorTreinamento.create(data);
    }

    async update(id, data) {
        const registro = await this.findById(id);
        if (!registro) return null;
        return await registro.update(data);
    }

    async delete(id) {
        const registro = await this.findById(id);
        if (!registro) return null;
        await registro.destroy();
        return registro;
    }
}

module.exports = new CoordenadorTreinamentoRepository();
