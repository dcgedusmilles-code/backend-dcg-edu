const departamentoInternoRepository = require('../../repositories/human_resources/internal_departments_repository');

class DepartamentoInternoService {
    async createDepartamento(data) {
        return await departamentoInternoRepository.create(data);
    }

    async getDepartamentos() {
        return await departamentoInternoRepository.findAll();
    }

    async getDepartamentoById(id) {
        return await departamentoInternoRepository.findById(id);
    }

    async updateDepartamento(id, data) {
        return await departamentoInternoRepository.update(id, data);
    }

    async deleteDepartamento(id) {
        return await departamentoInternoRepository.delete(id);
    }
}

module.exports = new DepartamentoInternoService();
