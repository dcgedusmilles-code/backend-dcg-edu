const agendamentoRepository = require('../../repositories/student_support_office/appointments_repository');

class AgendamentoService {
    async create(data) {
        return await agendamentoRepository.create(data);
    }

    async getAll() {
        return await agendamentoRepository.findAll();
    }

    async getById(id) {
        const agendamento = await agendamentoRepository.findById(id);
        if (!agendamento) throw new Error('Agendamento não encontrado');
        return agendamento;
    }

    async update(id, data) {
        const agendamento = await agendamentoRepository.update(id, data);
        if (!agendamento) throw new Error('Agendamento não encontrado');
        return agendamento;
    }

    async delete(id) {
        const deleted = await agendamentoRepository.delete(id);
        if (!deleted) throw new Error('Agendamento não encontrado');
        return deleted;
    }
}

module.exports = new AgendamentoService();
