const { Multa, Emprestimo, UsuarioBiblioteca } = require('../../models');

class MultaRepository {
    async create(data) {
        try {
            return await Multa.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar multa: ${err.message}`);
        }
    }

    async findAll(filters = {}) {
        try {
            return await Multa.findAll({
                where: filters,
                include: [
                    { model: Emprestimo, as: 'emprestimo' },
                    { model: UsuarioBiblioteca, as: 'usuario' }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar multas: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await Multa.findByPk(id, {
                include: [
                    { model: Emprestimo, as: 'emprestimo' },
                    { model: UsuarioBiblioteca, as: 'usuario' }
                ]
            });
        } catch (err) {
            throw new Error(`Erro ao buscar multa com ID ${id}: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const multa = await Multa.findByPk(id);
            if (!multa) return null;

            await multa.update(data);
            return multa;
        } catch (err) {
            throw new Error(`Erro ao atualizar multa: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const multa = await Multa.findByPk(id);
            if (!multa) return null;

            await multa.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir multa: ${err.message}`);
        }
    }
}

module.exports = new MultaRepository();
