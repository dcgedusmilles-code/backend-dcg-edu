const { Inadimplencia, Aluno, Mensalidade } = require('../../models');

class InadimplenciaRepository {
    async create(data) {
        return await Inadimplencia.create(data);
    }

    async findAll() {
        return await Inadimplencia.findAll({
            include: [
                { model: Aluno, as: 'aluno' },
                { model: Mensalidade, as: 'mensalidade' }
            ]
        });
    }

    async findById(id) {
        return await Inadimplencia.findByPk(id, {
            include: [
                { model: Aluno, as: 'aluno' },
                { model: Mensalidade, as: 'mensalidade' }
            ]
        });
    }

    async update(id, data) {
        const inadimplencia = await this.findById(id);
        if (!inadimplencia) return null;
        return await inadimplencia.update(data);
    }

    async delete(id) {
        const inadimplencia = await this.findById(id);
        if (!inadimplencia) return null;
        await inadimplencia.destroy();
        return true;
    }
}

module.exports = new InadimplenciaRepository();
