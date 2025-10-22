const { Emprestimo } = require('../../models');

class EmprestimoRepository {
    async findAll() {
        return await Emprestimo.findAll({ include: ['exemplar', 'usuario', 'multa'] });
    }

    async findById(id) {
        return await Emprestimo.findByPk(id, { include: ['exemplar', 'usuario', 'multa'] });
    }

    async create(data) {
        return await Emprestimo.create(data);
    }

    async update(id, data) {
        const emprestimo = await Emprestimo.findByPk(id);
        if (!emprestimo) return null;
        return await emprestimo.update(data);
    }

    async delete(id) {
        const emprestimo = await Emprestimo.findByPk(id);
        if (!emprestimo) return null;
        await emprestimo.destroy();
        return true;
    }
}

module.exports = new EmprestimoRepository();
