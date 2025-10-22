const { SuporteTI, UsuarioTI, AtivoTI } = require('../../models');

class SuporteTIRepository {
    async create(data) {
        return await SuporteTI.create(data);
    }

    async findAll() {
        return await SuporteTI.findAll({
            include: [
                { model: UsuarioTI, as: 'usuario' },
                { model: AtivoTI, as: 'ativo' }
            ]
        });
    }

    async findById(id) {
        return await SuporteTI.findByPk(id, {
            include: [
                { model: UsuarioTI, as: 'usuario' },
                { model: AtivoTI, as: 'ativo' }
            ]
        });
    }

    async update(id, data) {
        const suporte = await SuporteTI.findByPk(id);
        if (!suporte) return null;
        return await suporte.update(data);
    }

    async delete(id) {
        const suporte = await SuporteTI.findByPk(id);
        if (!suporte) return null;
        await suporte.destroy();
        return suporte;
    }
}

module.exports = new SuporteTIRepository();
