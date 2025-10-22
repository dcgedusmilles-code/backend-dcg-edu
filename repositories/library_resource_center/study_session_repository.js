const { SessaoEstudo, UsuarioBiblioteca } = require('../../models');

class SessaoEstudoRepository {
    async findAll() {
        return await SessaoEstudo.findAll({
            include: [{ model: UsuarioBiblioteca, as: 'usuario' }],
        });
    }

    async findById(id) {
        return await SessaoEstudo.findByPk(id, {
            include: [{ model: UsuarioBiblioteca, as: 'usuario' }],
        });
    }

    async create(data) {
        return await SessaoEstudo.create(data);
    }

    async update(id, data) {
        const sessao = await SessaoEstudo.findByPk(id);
        if (!sessao) return null;
        await sessao.update(data);
        return sessao;
    }

    async delete(id) {
        const sessao = await SessaoEstudo.findByPk(id);
        if (!sessao) return null;
        await sessao.destroy();
        return true;
    }
}

module.exports = new SessaoEstudoRepository();
