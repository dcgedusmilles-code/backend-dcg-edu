const ExAlunoRepository = require('../../repositories/internship_and_professional_integration_office/former_students_repository');

class ExAlunoService {
    async create(data) {
        if (!data.id_estudante || !data.empresa_atual)
            throw new Error('Campos obrigatórios: id_estudante e empresa_atual');
        return await ExAlunoRepository.create(data);
    }

    async findAll() {
        return await ExAlunoRepository.findAll();
    }

    async findById(id) {
        return await ExAlunoRepository.findById(id);
    }

    async update(id, data) {
        return await ExAlunoRepository.update(id, data);
    }

    async delete(id) {
        return await ExAlunoRepository.delete(id);
    }
}

module.exports = new ExAlunoService();
