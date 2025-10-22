const { DepartamentoInterno, Cargo } = require('../../models');

class DepartamentoInternoRepository {
    async create(data) {
        try {
            return await DepartamentoInterno.create(data);
        } catch (err) {
            throw new Error(`Erro ao criar departamento interno: ${err.message}`);
        }
    }

    async findAll(filters = {}) {
        try {
            return await DepartamentoInterno.findAll({
                where: filters,
                include: [
                    { model: Cargo, as: 'cargos' }
                ],
                order: [['createdAt', 'DESC']]
            });
        } catch (err) {
            throw new Error(`Erro ao listar departamentos internos: ${err.message}`);
        }
    }

    async findById(id) {
        try {
            return await DepartamentoInterno.findByPk(id, {
                include: [
                    { model: Cargo, as: 'cargos' }
                ]
            });
        } catch (err) {
            throw new Error(`Erro ao buscar departamento interno: ${err.message}`);
        }
    }

    async update(id, data) {
        try {
            const departamento = await DepartamentoInterno.findByPk(id);
            if (!departamento) return null;

            await departamento.update(data);
            return departamento;
        } catch (err) {
            throw new Error(`Erro ao atualizar departamento interno: ${err.message}`);
        }
    }

    async delete(id) {
        try {
            const departamento = await DepartamentoInterno.findByPk(id);
            if (!departamento) return null;

            await departamento.destroy();
            return true;
        } catch (err) {
            throw new Error(`Erro ao excluir departamento interno: ${err.message}`);
        }
    }
}

module.exports = new DepartamentoInternoRepository();
