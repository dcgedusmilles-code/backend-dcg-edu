const { Conteudo, Funcionario } = require('../../models');

class ConteudoRepository {
    async create(data) {
        return await Conteudo.create(data);
    }

    async findAll() {
        return await Conteudo.findAll({
            include: [{ model: Funcionario, as: 'autorConteudo' }]
        });
    }

    async findById(id) {
        return await Conteudo.findByPk(id, {
            include: [{ model: Funcionario, as: 'autorConteudo' }]
        });
    }

    async update(id, data) {
        const conteudo = await Conteudo.findByPk(id);
        if (!conteudo) return null;
        return await conteudo.update(data);
    }

    async delete(id) {
        return await Conteudo.destroy({ where: { id } });
    }
}

module.exports = new ConteudoRepository();
