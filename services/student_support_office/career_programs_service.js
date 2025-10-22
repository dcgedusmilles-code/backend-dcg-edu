const programaCarreiraRepository = require('../../repositories/student_support_office/career_programs_repository');

class ProgramaCarreiraService {
    async create(data) {
        return await programaCarreiraRepository.create(data);
    }

    async getAll() {
        return await programaCarreiraRepository.findAll();
    }

    async getById(id) {
        const programa = await programaCarreiraRepository.findById(id);
        if (!programa) throw new Error('Programa de Carreira não encontrado');
        return programa;
    }

    async update(id, data) {
        const programa = await programaCarreiraRepository.update(id, data);
        if (!programa) throw new Error('Programa de Carreira não encontrado');
        return programa;
    }

    async delete(id) {
        const deleted = await programaCarreiraRepository.delete(id);
        if (!deleted) throw new Error('Programa de Carreira não encontrado');
        return deleted;
    }
}

module.exports = new ProgramaCarreiraService();
