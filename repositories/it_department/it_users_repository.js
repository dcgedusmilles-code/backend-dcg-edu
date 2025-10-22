const { UsuarioTI, DepartamentoTI, ContaSistema, SuporteTI, LogAcesso } = require('../../models');

class UsuarioTIRepository {
    async create(data) {
        return await UsuarioTI.create(data);
    }

    async findAll() {
        return await UsuarioTI.findAll({
            include: [
                { model: DepartamentoTI, as: 'departamento' },
                { model: ContaSistema, as: 'contas' },
                { model: SuporteTI, as: 'chamados' },
                { model: LogAcesso, as: 'logs' },
            ]
        });
    }

    async findById(id) {
        return await UsuarioTI.findByPk(id, {
            include: [
                { model: DepartamentoTI, as: 'departamento' },
                { model: ContaSistema, as: 'contas' },
                { model: SuporteTI, as: 'chamados' },
                { model: LogAcesso, as: 'logs' },
            ]
        });
    }

    async update(id, data) {
        const usuario = await UsuarioTI.findByPk(id);
        if (!usuario) return null;
        return await usuario.update(data);
    }

    async delete(id) {
        const usuario = await UsuarioTI.findByPk(id);
        if (!usuario) return null;
        await usuario.destroy();
        return usuario;
    }
}

module.exports = new UsuarioTIRepository();
