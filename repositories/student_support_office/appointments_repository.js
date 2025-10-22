const { Agendamento, Aluno, Orientador } = require('../../models');

class AgendamentoRepository {
    async create(data) {
        return await Agendamento.create(data);
    }

    async findAll() {
        return await Agendamento.findAll({
            include: [
                { model: Aluno, as: 'estudante' },
                { model: Orientador, as: 'orientador' }
            ]
        });
    }

    async findById(id) {
        return await Agendamento.findByPk(id, {
            include: [
                { model: Aluno, as: 'estudante' },
                { model: Orientador, as: 'orientador' }
            ]
        });
    }

    async update(id, data) {
        const agendamento = await Agendamento.findByPk(id);
        if (!agendamento) return null;
        return await agendamento.update(data);
    }

    async delete(id) {
        const agendamento = await Agendamento.findByPk(id);
        if (!agendamento) return null;
        await agendamento.destroy();
        return agendamento;
    }
}

module.exports = new AgendamentoRepository();
